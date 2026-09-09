from uuid import UUID

from pydantic import BaseModel, ConfigDict


class NotificationCreate(BaseModel):
    title: str
    message: str


class NotificationResponse(BaseModel):
    id: UUID
    title: str
    message: str
    is_read: bool

    model_config = ConfigDict(from_attributes=True)
class MessageResponse(BaseModel):
    message: str