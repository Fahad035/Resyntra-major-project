from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.modules.auth.repository import AuthRepository
from app.modules.auth.schemas import RegisterRequest, UserResponse,TokenResponse,RefreshTokenRequest,MessageResponse
from app.modules.auth.service import AuthService
from app.modules.auth.dependencies import get_current_user
from app.models.user import User

from app.modules.auth.schemas import (
    RegisterRequest,
    UserResponse,
    LoginRequest,
    LoginResponse,
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.get("/me", response_model=UserResponse)
async def me(
    current_user: User = Depends(get_current_user),
):
    return current_user

@router.post("/register", response_model=UserResponse, status_code=201)
async def register(
    data: RegisterRequest,
    db: AsyncSession = Depends(get_db),
):
    repo = AuthRepository(db)
    service = AuthService(repo)

    return await service.register(data)

@router.post("/login", response_model=LoginResponse)
async def login(
    data: LoginRequest,
    db: AsyncSession = Depends(get_db),
):
    repo = AuthRepository(db)
    service = AuthService(repo)

    return await service.login(data)

@router.post("/refresh", response_model=TokenResponse)
async def refresh_token(
    data: RefreshTokenRequest,
    db: AsyncSession = Depends(get_db),
):
    repo = AuthRepository(db)
    service = AuthService(repo)

    return await service.refresh(data.refresh_token)

@router.post("/logout", response_model=MessageResponse)
async def logout(
    data: RefreshTokenRequest,
    db: AsyncSession = Depends(get_db),
):
    repo = AuthRepository(db)
    service = AuthService(repo)

    return await service.logout(data.refresh_token)