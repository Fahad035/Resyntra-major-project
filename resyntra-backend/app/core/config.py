from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "Resyntra API"
    APP_ENV: str = "development"
    DEBUG: bool = True

    # Authentication
    # Secure by default. Development mode can explicitly set
    # AUTH_ENABLED=false in the local .env file.
    AUTH_ENABLED: bool = True

    DATABASE_URL: str
    REDIS_URL: str

    QDRANT_URL: str
    QDRANT_HOST: str = "localhost"
    QDRANT_PORT: int = 6333
    QDRANT_COLLECTION: str = "papers"

    # Gemini embedding configuration
    EMBEDDING_MODEL: str = "gemini-embedding-001"
    EMBEDDING_DIMENSION: int = 768

    # OpenAI configuration
    OPENAI_API_KEY: str
    OPENAI_MODEL: str

    # Dedicated model for research discovery embeddings
    OPENAI_EMBEDDING_MODEL: str = "text-embedding-3-small"
    OPENAI_EMBEDDING_DIMENSION: int = 768

    # Gemini configuration
    GEMINI_MODEL: str = "gemini-3.6-flash"
    GEMINI_API_KEY: str

    # OpenRouter configuration
    OPENROUTER_API_KEY: str

    # JWT configuration
    SECRET_KEY: str
    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30

    # AI provider
    AI_PROVIDER: str = "gemini"

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )


@lru_cache
def get_settings():
    return Settings()


settings = get_settings()