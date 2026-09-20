from datetime import UTC, datetime, timedelta

from fastapi import HTTPException, status

from app.models.refresh_token import RefreshToken
from app.models.user import User
from app.modules.auth.repository import AuthRepository
from app.modules.auth.schemas import LoginRequest, RegisterRequest
from app.modules.auth.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password,
)


class AuthService:

    def __init__(self, repo: AuthRepository):
        self.repo = repo

    async def register(self, data: RegisterRequest):

        if await self.repo.get_by_email(data.email):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already exists",
            )

        if await self.repo.get_by_username(data.username):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Username already exists",
            )

        user = User(
            email=data.email,
            username=data.username,
            password_hash=hash_password(data.password),
        )

        return await self.repo.create(user)

    async def login(self, data: LoginRequest):

        user = await self.repo.get_by_email(data.email)

        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password",
            )

        if not verify_password(data.password, user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password",
            )

        access_token = create_access_token(
            {
                "sub": str(user.id),
                "email": user.email,
                "role": user.role,
            }
        )

        refresh_token = create_refresh_token(
            {
                "sub": str(user.id),
            }
        )

        await self.repo.create_refresh_token(
            RefreshToken(
                user_id=user.id,
                token=refresh_token,
                expires_at=datetime.now(UTC) + timedelta(days=30),
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

        payload = decode_token(
            refresh_token,
            expected_type="refresh",
        )

        if payload is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid refresh token",
            )

        saved_token = await self.repo.get_refresh_token(refresh_token)

        if saved_token is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Refresh token not found",
            )

        if saved_token.expires_at < datetime.now(UTC):
            await self.repo.delete_refresh_token(refresh_token)

            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Refresh token expired",
            )

        user_id = payload.get("sub")

        if not user_id:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid refresh token payload",
            )

        user = await self.repo.get_by_id(user_id)

        if user is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="User not found",
            )

        # Revoke the old refresh token.
        await self.repo.revoke_refresh_token(refresh_token)

        # Create a new access token.
        access_token = create_access_token(
            {
                "sub": str(user.id),
                "email": user.email,
                "role": user.role,
            }
        )

        # Create a new refresh token.
        new_refresh_token = create_refresh_token(
            {
                "sub": str(user.id),
            }
        )

        # Store the new refresh token.
        await self.repo.create_refresh_token(
            RefreshToken(
                user_id=user.id,
                token=new_refresh_token,
                expires_at=datetime.now(UTC) + timedelta(days=30),
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
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Refresh token not found",
            )

        await self.repo.revoke_refresh_token(refresh_token)

        return {"message": "Logged out successfully"}