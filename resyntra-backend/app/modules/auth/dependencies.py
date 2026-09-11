from uuid import UUID

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.database.session import get_db
from app.models.user import User
from app.modules.auth.repository import AuthRepository
from app.modules.auth.security import decode_token

security = HTTPBearer(auto_error=False)


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: AsyncSession = Depends(get_db),
):
    """
    Development Mode:
        AUTH_ENABLED = False
            -> automatically returns the first user.

    Production Mode:
        AUTH_ENABLED = True
            -> validates JWT normally.
    """

    repo = AuthRepository(db)

    # -------------------------
    # DEVELOPMENT MODE
    # -------------------------

    if not settings.AUTH_ENABLED:
        user = await repo.get_first_user()

        if user is None:
            raise HTTPException(
                status_code=500,
                detail="No users exist in database.",
            )

        return user

    # -------------------------
    # PRODUCTION MODE
    # -------------------------

    if credentials is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication required",
        )

    payload = decode_token(credentials.credentials)

    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
        )

    user = await repo.get_by_id(
        UUID(payload["sub"])
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found",
        )

    return user