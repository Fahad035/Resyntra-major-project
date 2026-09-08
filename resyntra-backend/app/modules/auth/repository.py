from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.refresh_token import RefreshToken
from app.models.user import User
from uuid import UUID

class AuthRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_by_email(self, email: str):
        result = await self.db.execute(
            select(User).where(User.email == email)
        )
        return result.scalar_one_or_none()

    async def get_by_username(self, username: str):
        result = await self.db.execute(
            select(User).where(User.username == username)
        )
        return result.scalar_one_or_none()

    async def get_by_id(self, user_id: UUID):
        result = await self.db.execute(
            select(User).where(User.id == user_id)
        )
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
        result = await self.db.execute(
            select(RefreshToken).where(
                RefreshToken.token == token
            )
        )
        return result.scalar_one_or_none()


    async def delete_refresh_token(self, token: str):
        refresh = await self.get_refresh_token(token)

        if refresh:
            await self.db.delete(refresh)
            await self.db.commit()


    async def revoke_refresh_token(self, token: str):
        refresh_token = await self.get_refresh_token(token)

        if refresh_token:
            await self.db.delete(refresh_token)
            await self.db.commit()