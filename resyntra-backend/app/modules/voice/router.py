import io
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile, status
from fastapi.responses import StreamingResponse

from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.voice.schemas import (
    SpeakRequest,
    TranscribeResponse,
)
from app.modules.voice.service import VoiceService

router = APIRouter(
    prefix="/voice",
    tags=["Voice"],
)


@router.post(
    "/transcribe",
    response_model=TranscribeResponse,
)
async def transcribe(
    audio: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
):
    if not audio.content_type or not audio.content_type.startswith("audio/"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Uploaded file must be an audio clip.",
        )

    audio_bytes = await audio.read()

    service = VoiceService()
    text = service.transcribe(audio_bytes, audio.content_type)

    return {"text": text}


# REMOVED: response_model=SpeakResponse because we are returning a raw byte stream
@router.post(
    "/speak",
)
async def speak(
    data: SpeakRequest,
    current_user: User = Depends(get_current_user),
):
    service = VoiceService()
    
    # This now retrieves the dictionary containing {"audio_bytes_raw": bytes, ...}
    result = service.speak(data.text, data.voice_id)
    
    raw_audio_data = result["audio_bytes_raw"]

    # Wrap the raw binary bytes into a memory stream buffer and send it back to the client
    return StreamingResponse(
        io.BytesIO(raw_audio_data),
        media_type="audio/mpeg",
        headers={
            "Content-Disposition": "inline; filename=speech.mp3",
            "Accept-Ranges": "bytes"
        }
    )
