from datetime import datetime
from uuid import UUID

from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.auth_token import AuthToken
from app.models.refresh_token import RefreshToken
from app.models.user import User


class AuthRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_by_email(self, email: str):
        result = await self.db.execute(select(User).where(User.email == email))
        return result.scalar_one_or_none()

    async def get_by_username(self, username: str):
        result = await self.db.execute(select(User).where(User.username == username))
        return result.scalar_one_or_none()

    async def get_by_id(self, user_id: UUID):
        result = await self.db.execute(select(User).where(User.id == user_id))
        return result.scalar_one_or_none()

    async def get_first_user(self):
        result = await self.db.execute(select(User).limit(1))
        return result.scalar_one_or_none()

    async def create(self, user: User):
        self.db.add(user)
        await self.db.commit()
        await self.db.refresh(user)
        return user

    async def create_refresh_token(self, token: RefreshToken):
        self.db.add(token)
        await self.db.commit()
        await self.db.refresh(token)
        return token

    async def get_refresh_token(self, token: str):
        result = await self.db.execute(select(RefreshToken).where(RefreshToken.token == token))
        return result.scalar_one_or_none()

    async def delete_refresh_token(self, token: str):
        refresh = await self.get_refresh_token(token)
        if refresh:
            await self.db.delete(refresh)
            await self.db.commit()

    async def revoke_refresh_token(self, token: str):
        await self.delete_refresh_token(token)

    async def create_auth_token(self, token: AuthToken):
        self.db.add(token)
        await self.db.commit()
        await self.db.refresh(token)
        return token

    async def get_auth_token(self, token: str, token_type: str):
        result = await self.db.execute(
            select(AuthToken).where(
                AuthToken.token == token,
                AuthToken.token_type == token_type,
            )
        )
        return result.scalar_one_or_none()

    async def delete_auth_token(self, token: str):
        await self.db.execute(delete(AuthToken).where(AuthToken.token == token))
        await self.db.commit()

    async def delete_user_auth_tokens(self, user_id: UUID, token_type: str | None = None):
        statement = delete(AuthToken).where(AuthToken.user_id == user_id)
        if token_type:
            statement = statement.where(AuthToken.token_type == token_type)
        await self.db.execute(statement)
        await self.db.commit()
