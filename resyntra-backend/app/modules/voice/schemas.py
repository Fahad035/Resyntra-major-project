from pydantic import BaseModel, Field


class TranscribeResponse(BaseModel):

    text: str


class SpeakRequest(BaseModel):

    text: str = Field(min_length=1)
    voice_id: str | None = None


class SpeakResponse(BaseModel):

    audio_url: str
    duration_seconds: float | None = None