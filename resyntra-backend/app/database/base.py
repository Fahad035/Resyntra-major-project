from sqlalchemy.orm import DeclarativeBase

from app.database.mixins import BaseModelMixin


class Base(DeclarativeBase):
    pass


class BaseModel(BaseModelMixin, Base):
    __abstract__ = True