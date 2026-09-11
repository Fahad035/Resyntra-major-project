from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "Resyntra API"
    APP_ENV: str = "development"
    DEBUG: bool = True
    
    AUTH_ENABLED: bool = False

    DATABASE_URL: str
    REDIS_URL: str
    QDRANT_URL: str

    QDRANT_HOST: str = "localhost"
    QDRANT_PORT: int = 6333
    QDRANT_COLLECTION: str = "papers"

    EMBEDDING_MODEL: str = "text-embedding-004"

    SECRET_KEY: str
    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30

    AI_PROVIDER: str = "gemini"

    EMBEDDING_DIMENSION: int = 768
    EMBEDDING_MODEL: str = "gemini-embedding-001"
    OPENAI_API_KEY: str
    GEMINI_MODEL: str = "gemini-3.6-flash"
    OPENAI_MODEL: str
    GEMINI_API_KEY: str

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )


@lru_cache
def get_settings():
    return Settings()


settings = get_settings()