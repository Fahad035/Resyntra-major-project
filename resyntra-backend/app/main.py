from fastapi import Depends, FastAPI
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.database.session import get_db

app = FastAPI(title=settings.APP_NAME)


@app.get("/")
async def root():
    return {"message": "Resyntra API"}


@app.get("/health/db")
async def database_health(db: AsyncSession = Depends(get_db)):
    await db.execute(text("SELECT 1"))
    return {"database": "connected"}