from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "Resyntra API"
    APP_ENV: str = "development"
    DEBUG: bool = True

    # Frontend origins are comma-separated in .env.
    CORS_ORIGINS: str = "http://localhost:5173,http://localhost:3000"
    FRONTEND_URL: str = "http://localhost:5173"

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

    # DeepSeek configuration (OpenAI-compatible API)
    DEEPSEEK_API_KEY: str
    DEEPSEEK_MODEL: str = "deepseek-flash"

    # Deepgram (speech-to-text, used for chat voice input)
    DEEPGRAM_API_KEY: str

    # Murf AI (text-to-speech, used to read chat answers aloud)
    # Murf AI (text-to-speech, used to read chat answers aloud)
    MURF_API_KEY: str
    MURF_VOICE_ID: str = "Abhinav"
    MURF_STYLE: str = "Conversational"
    MURF_MODEL: str = "falcon-2"


    # JWT configuration
    SECRET_KEY: str
    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30

    # AI provider
    AI_PROVIDER: str = "gemini"

    # SMTP / email delivery. Mailpit is the default local development server.
    SMTP_HOST: str = "localhost"
    SMTP_PORT: int = 1025
    SMTP_USERNAME: str = ""
    SMTP_PASSWORD: str = ""
    SMTP_FROM_EMAIL: str = "no-reply@resyntra.local"
    SMTP_FROM_NAME: str = "Resyntra"

    EMAIL_VERIFICATION_EXPIRE_HOURS: int = 24
    PASSWORD_RESET_EXPIRE_MINUTES: int = 30

    # Rate limits are intentionally configurable so production can tighten them.
    LOGIN_RATE_LIMIT: str = "5/minute"
    AI_RATE_LIMIT: str = "20/minute"

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )


@lru_cache
def get_settings():
    return Settings()


settings = get_settings()
