from fastapi import APIRouter, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.rate_limit import limiter
from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.auth.repository import AuthRepository
from app.modules.auth.schemas import (
    ForgotPasswordRequest,
    LoginRequest,
    LoginResponse,
    MessageResponse,
    RefreshTokenRequest,
    RegisterRequest,
    ResetPasswordRequest,
    TokenResponse,
    UserResponse,
    VerifyEmailRequest,
)
from app.modules.auth.service import AuthService

router = APIRouter(prefix="/auth", tags=["Authentication"])


def get_auth_service(db: AsyncSession = Depends(get_db)):
    return AuthService(AuthRepository(db))


@router.get("/me", response_model=UserResponse)
async def me(current_user: User = Depends(get_current_user)):
    return current_user


@router.post("/register", response_model=UserResponse, status_code=201)
async def register(
    data: RegisterRequest,
    service: AuthService = Depends(get_auth_service),
):
    return await service.register(data)


@router.post("/login", response_model=LoginResponse)
@limiter.limit(settings.LOGIN_RATE_LIMIT)
async def login(
    request: Request,
    data: LoginRequest,
    service: AuthService = Depends(get_auth_service),
):
    return await service.login(data)


@router.post("/refresh", response_model=TokenResponse)
async def refresh_token(
    data: RefreshTokenRequest,
    service: AuthService = Depends(get_auth_service),
):
    return await service.refresh(data.refresh_token)


@router.post("/logout", response_model=MessageResponse)
async def logout(
    data: RefreshTokenRequest,
    service: AuthService = Depends(get_auth_service),
):
    return await service.logout(data.refresh_token)


@router.post("/verify-email", response_model=MessageResponse)
async def verify_email(
    data: VerifyEmailRequest,
    service: AuthService = Depends(get_auth_service),
):
    return await service.verify_email(data.token)


@router.post("/forgot-password", response_model=MessageResponse)
@limiter.limit("5/minute")
async def forgot_password(
    request: Request,
    data: ForgotPasswordRequest,
    service: AuthService = Depends(get_auth_service),
):
    return await service.forgot_password(data)


@router.post("/reset-password", response_model=MessageResponse)
@limiter.limit("5/minute")
async def reset_password(
    request: Request,
    data: ResetPasswordRequest,
    service: AuthService = Depends(get_auth_service),
):
    return await service.reset_password(data)
