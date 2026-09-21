import httpx
from fastapi import HTTPException, status

from app.core.config import settings

DEEPGRAM_URL = "https://deepgram.com"
# FIXED: Route directly to Murf's dedicated Global Router for Falcon 2 streaming
MURF_URL = "https://global.api.murf.ai/v1/speech/stream"

MAX_SPEECH_CHARS = 4000
MAX_AUDIO_BYTES = 15 * 1024 * 1024  # 15MB


class VoiceService:
    # ... transcribe method remains unchanged

    def speak(self, text: str, voice_id: str | None) -> dict:
        truncated = text[:MAX_SPEECH_CHARS]
        selected_voice = voice_id or settings.MURF_VOICE_ID

        # FIXED: Core payload using correct keys expected by the global streaming router
        payload = {
            "text": truncated,
            "voiceId": selected_voice,  # Explicit camelCase required by stream
            "model": settings.MURF_MODEL,
        }

        # Apply specific style features only if using your default configured profile
        if selected_voice == settings.MURF_VOICE_ID and settings.MURF_STYLE:
            payload["style"] = settings.MURF_STYLE

        try:
            response = httpx.post(
                MURF_URL,
                headers={
                    "api-key": settings.MURF_API_KEY,
                    "Content-Type": "application/json",
                },
                json=payload,
                timeout=30,
            )
            response.raise_for_status()
        except httpx.HTTPStatusError as e:
            print(f"[Voice:speak] Murf {e.response.status_code}: {e.response.text}")
            raise HTTPException(
                status_code=status.HTTP_502_BAD_GATEWAY,
                detail=f"Text-to-speech provider error ({e.response.status_code})",
            ) from e
        except httpx.RequestError as e:
            print(f"[Voice:speak] Couldn't reach Murf: {e}")
            raise HTTPException(
                status_code=status.HTTP_502_BAD_GATEWAY,
                detail="Couldn't reach the text-to-speech provider.",
            ) from e

        # Intercept raw binary audio stream content 
        audio_bytes = response.content

        if not audio_bytes:
            raise HTTPException(
                status_code=status.HTTP_502_BAD_GATEWAY,
                detail="Text-to-speech provider returned an empty audio block.",
            )

        return {
            "audio_bytes_raw": audio_bytes,
            "size": len(audio_bytes),
            "format": "audio/mpeg"
        }
