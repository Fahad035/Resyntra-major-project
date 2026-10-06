import logging
import secrets
from datetime import UTC, datetime, timedelta

from fastapi import HTTPException, status

from app.core.config import settings
from app.models.auth_token import AuthToken
from app.models.refresh_token import RefreshToken
from app.models.user import User
from app.modules.auth.email import EmailService
from app.modules.auth.repository import AuthRepository
from app.modules.auth.schemas import (
    ForgotPasswordRequest,
    LoginRequest,
    RegisterRequest,
    ResetPasswordRequest,
)
from app.modules.auth.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password,
)

logger = logging.getLogger(__name__)


class AuthService:
    def __init__(self, repo: AuthRepository, email_service: EmailService | None = None):
        self.repo = repo
        self.email = email_service or EmailService()

    async def _create_one_time_token(self, user_id, token_type: str, expires_at: datetime):
        await self.repo.delete_user_auth_tokens(user_id, token_type)
        token = secrets.token_urlsafe(48)
        await self.repo.create_auth_token(
            AuthToken(
                user_id=user_id,
                token=token,
                token_type=token_type,
                expires_at=expires_at,
            )
        )
        return token

    async def _send_verification(self, user: User):
        token = await self._create_one_time_token(
            user.id,
            "email_verification",
            datetime.now(UTC)
            + timedelta(hours=settings.EMAIL_VERIFICATION_EXPIRE_HOURS),
        )

        logger.info(
            "Sending verification email to %s",
            user.email,
        )

        await self.email.send_verification_email(
            user.email,
            token,
        )

        logger.info(
            "Verification email sent successfully to %s",
            user.email,
        )

    async def register(self, data: RegisterRequest):
        if await self.repo.get_by_email(data.email):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already exists")
        if await self.repo.get_by_username(data.username):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username already exists")

        user = User(
            email=data.email,
            username=data.username,
            password_hash=hash_password(data.password),
            is_verified=False,
        )
        user = await self.repo.create(user)

        print(">>> REGISTER: ABOUT TO SEND VERIFICATION EMAIL")
        await self._send_verification(user)
        print(">>> REGISTER: VERIFICATION EMAIL COMPLETED")
        return user

    async def login(self, data: LoginRequest):
        user = await self.repo.get_by_email(data.email)
        if not user or not verify_password(data.password, user.password_hash):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")

        if not user.is_verified:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Please verify your email before signing in.",
            )

        access_token = create_access_token({"sub": str(user.id), "email": user.email, "role": user.role})
        refresh_token = create_refresh_token({"sub": str(user.id)})

        await self.repo.create_refresh_token(
            RefreshToken(
                user_id=user.id,
                token=refresh_token,
                expires_at=datetime.now(UTC) + timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS),
            )
        )

        return {
            "token": {
                "access_token": access_token,
                "refresh_token": refresh_token,
                "token_type": "bearer",
            },
            "user": user,
        }

    async def refresh(self, refresh_token: str):
        payload = decode_token(refresh_token, expected_type="refresh")
        if payload is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token")

        saved_token = await self.repo.get_refresh_token(refresh_token)
        if saved_token is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Refresh token not found")

        if saved_token.expires_at < datetime.now(UTC):
            await self.repo.delete_refresh_token(refresh_token)
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Refresh token expired")

        user_id = payload.get("sub")
        if not user_id:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token payload")

        user = await self.repo.get_by_id(user_id)
        if user is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")

        await self.repo.revoke_refresh_token(refresh_token)

        access_token = create_access_token({"sub": str(user.id), "email": user.email, "role": user.role})
        new_refresh_token = create_refresh_token({"sub": str(user.id)})
        await self.repo.create_refresh_token(
            RefreshToken(
                user_id=user.id,
                token=new_refresh_token,
                expires_at=datetime.now(UTC) + timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS),
            )
        )

        return {
            "access_token": access_token,
            "refresh_token": new_refresh_token,
            "token_type": "bearer",
        }

    async def logout(self, refresh_token: str):
        saved_token = await self.repo.get_refresh_token(refresh_token)
        if saved_token is None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Refresh token not found")
        await self.repo.revoke_refresh_token(refresh_token)
        return {"message": "Logged out successfully"}

    async def verify_email(self, token: str):
        auth_token = await self.repo.get_auth_token(token, "email_verification")
        if auth_token is None or auth_token.expires_at < datetime.now(UTC):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired verification link")

        user = await self.repo.get_by_id(auth_token.user_id)
        if user is None:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User not found")

        user.is_verified = True
        await self.repo.db.commit()
        await self.repo.delete_auth_token(token)
        return {"message": "Email verified successfully"}

    async def forgot_password(self, data: ForgotPasswordRequest):
        # Always return the same response so account existence is not disclosed.
        user = await self.repo.get_by_email(data.email)
        if user:
            token = await self._create_one_time_token(
                user.id,
                "password_reset",
                datetime.now(UTC) + timedelta(minutes=settings.PASSWORD_RESET_EXPIRE_MINUTES),
            )
            try:
                await self.email.send_password_reset_email(user.email, token)
            except Exception:
                logger.exception("Unable to send password reset email to %s", user.email)

        return {"message": "If an account exists for that email, a password reset link has been sent."}

    async def reset_password(self, data: ResetPasswordRequest):
        auth_token = await self.repo.get_auth_token(data.token, "password_reset")
        if auth_token is None or auth_token.expires_at < datetime.now(UTC):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired password reset link")

        user = await self.repo.get_by_id(auth_token.user_id)
        if user is None:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User not found")

        user.password_hash = hash_password(data.password)
        await self.repo.db.commit()
        await self.repo.delete_auth_token(data.token)
        return {"message": "Password reset successfully"}
