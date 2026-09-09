from fastapi import Depends, FastAPI
from fastapi.openapi.utils import get_openapi
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.config import settings
from app.database.session import get_db
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from app.core.middleware import log_requests
from contextlib import asynccontextmanager
from app.ai.qdrant import create_collection
from pathlib import Path


from app.modules.auth.router import router as auth_router
from app.modules.papers.router import router as paper_router
from app.modules.chat.router import router as chat_router
from app.modules.collections.router import router as collection_router
from app.modules.projects.router import router as project_router
from app.modules.notes.router import router as note_router
from app.modules.citations.router import router as citation_router
from app.modules.search.router import router as search_router
from app.modules.summarizer.router import router as summarizer_router
from app.modules.literature_review.router import (
    router as literature_review_router,
)
from app.modules.research_gap.router import (
    router as research_gap_router,
)
from app.modules.dashboard.router import router as dashboard_router
from app.modules.analytics.router import router as analytics_router
from app.modules.universities.router import (
    router as university_router,
)
from app.modules.professors.router import router as professor_router
from app.modules.chat_history.router import (
    router as chat_history_router,
)
from app.modules.notifications.router import (
    router as notifications_router,
)
from app.modules.admin.router import router as admin_router
from app.modules.ppt_generator.router import (
    router as ppt_router
)
from app.core.exceptions import register_exception_handlers

@asynccontextmanager
async def lifespan(app: FastAPI):

    create_collection()

    print("Resyntra API Started")

    yield

    print("Resyntra API Stopped")

app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
    description="AI-powered Research Assistant Backend",
    swagger_ui_parameters={
        "persistAuthorization": True,
    },
)

register_exception_handlers(app)

app.middleware("http")(log_requests)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    
    openapi_schema = get_openapi(
        title=app.title,
        version=app.version,
        routes=app.routes,
    )
    
    #  CHANGE THE KEY NAME FROM 'BearerAuth' TO 'HTTPBearer'
    openapi_schema["components"]["securitySchemes"] = {
        "HTTPBearer": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
            "description": "Enter your raw JWT token below."
        }
    }
    
    # Apply it globally using the matching key name
    openapi_schema["security"] = [{"HTTPBearer": []}]
    
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi

app.include_router(auth_router)
app.include_router(paper_router)
app.include_router(chat_router)
app.include_router(collection_router)
app.include_router(project_router)
app.include_router(note_router)
app.include_router(citation_router)
app.include_router(search_router)
app.include_router(summarizer_router)
app.include_router(literature_review_router)
app.include_router(research_gap_router)
app.include_router(dashboard_router)
app.include_router(analytics_router)
app.include_router(university_router)
app.include_router(professor_router)
app.include_router(chat_history_router)
app.include_router(notifications_router)
app.include_router(admin_router)
app.include_router(ppt_router)


Path("generated").mkdir(
    exist_ok=True,
)

@app.get("/")
async def root():
    return {"message": "Resyntra API"}


@app.get("/health/db")
async def database_health(
    db: AsyncSession = Depends(get_db),
):
    try:

        await db.execute(text("SELECT 1"))

        return {
            "database": "connected",
        }

    except Exception:

        return {
            "database": "disconnected",
        }

@app.get("/health")
async def health():

    return {
        "status": "healthy",
        "version": "1.0.0",
        "ai_provider": settings.AI_PROVIDER,
    }