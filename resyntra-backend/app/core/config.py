from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "Resyntra API"
    APP_ENV: str = "development"
    DEBUG: bool = True

    DATABASE_URL: str
    REDIS_URL: str
    QDRANT_URL: str

    SECRET_KEY: str
    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30

    OPENAI_API_KEY: str = ""
    GOOGLE_API_KEY: str = ""

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )


@lru_cache
def get_settings():
    return Settings()


settings = get_settings()