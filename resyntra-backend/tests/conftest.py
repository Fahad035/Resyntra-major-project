import os

# Settings are loaded during module import. Provide safe test-only values so
# unit tests never depend on a developer's local .env file or real API keys.
TEST_ENV = {
    "DATABASE_URL": "postgresql+psycopg://postgres:postgres@localhost:5432/resyntra_test",
    "REDIS_URL": "redis://localhost:6379/15",
    "QDRANT_URL": "http://localhost:6333",
    "QDRANT_HOST": "localhost",
    "QDRANT_PORT": "6333",
    "QDRANT_COLLECTION": "papers_test",
    "OPENAI_API_KEY": "test-openai-key",
    "OPENAI_MODEL": "test-model",
    "GEMINI_API_KEY": "test-gemini-key",
    "OPENROUTER_API_KEY": "test-openrouter-key",
    "DEEPSEEK_API_KEY": "test-deepseek-key",
    "DEEPGRAM_API_KEY": "test-deepgram-key",
    "MURF_API_KEY": "test-murf-key",
    "SECRET_KEY": "test-secret-key-for-pytest-only",
    "AUTH_ENABLED": "true",
}

for key, value in TEST_ENV.items():
    os.environ.setdefault(key, value)
