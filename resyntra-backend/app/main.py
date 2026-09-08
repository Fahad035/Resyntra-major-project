from fastapi import Depends, FastAPI
from fastapi.openapi.utils import get_openapi
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.config import settings
from app.database.session import get_db

from app.modules.auth.router import router as auth_router
from app.modules.papers.router import router as paper_router



app = FastAPI(title=settings.APP_NAME,swagger_ui_parameters={"persistAuthorization": True})

#  Ensure your app/main.py file overrides the schema exactly like this:
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

@app.get("/")
async def root():
    return {"message": "Resyntra API"}


@app.get("/health/db")
async def database_health(db: AsyncSession = Depends(get_db)):
    await db.execute(text("SELECT 1"))
    return {"database": "connected"}