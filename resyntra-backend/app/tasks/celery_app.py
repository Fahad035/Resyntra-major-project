from celery import Celery

from app.core.config import settings

celery_app = Celery(
    "resyntra",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL,
)

celery_app.autodiscover_tasks(["app.tasks"]) 
celery_app.conf.imports = ["app.tasks.paper_tasks"]

celery_app.conf.update(
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    timezone="UTC",
)