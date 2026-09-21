from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.ai.providers.resilient import AIProviderError


def register_exception_handlers(app: FastAPI):

    @app.exception_handler(AIProviderError)
    async def ai_provider_exception_handler(
        request: Request,
        exc: AIProviderError,
    ):
        # Logged server-side (see below) so the terminal still shows
        # exactly which providers failed and why, without exposing
        # that detail - or a raw stack trace - to the client.
        print(f"[AIProviderError] {exc}")

        return JSONResponse(
            status_code=503,
            content={
                "success": False,
                "message": (
                    "Our AI provider is temporarily unavailable or has "
                    "hit its usage limit. Please try again in a moment."
                ),
            },
        )

    @app.exception_handler(StarletteHTTPException)
    async def http_exception_handler(
        request: Request,
        exc: StarletteHTTPException,
    ):
        return JSONResponse(
            status_code=exc.status_code,
            content={
                "success": False,
                "message": exc.detail,
            },
        )

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(
        request: Request,
        exc: RequestValidationError,
    ):
        return JSONResponse(
            status_code=422,
            content={
                "success": False,
                "message": "Validation Error",
                "errors": exc.errors(),
            },
        )

    @app.exception_handler(Exception)
    async def internal_exception_handler(
        request: Request,
        exc: Exception,
    ):
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": "Internal Server Error",
            },
        )