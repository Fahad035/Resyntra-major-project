import api from "./client";

/*
|--------------------------------------------------------------------------
| Transcribe Audio (Deepgram)
|--------------------------------------------------------------------------
*/

export const transcribeAudio = async (audioBlob) => {
  const formData = new FormData();

  formData.append("audio", audioBlob, "voice-input.webm");

  const response = await api.post("/voice/transcribe", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

/*
|--------------------------------------------------------------------------
| Text to Speech (Murf AI)
|--------------------------------------------------------------------------
*/

export const synthesizeSpeech = async (text, voiceId) => {
  const response = await api.post(
    "/voice/speak",
    {
      text,
      voice_id: voiceId,
    },
    {
      // CRITICAL: Tells Axios to treat the response as a binary file stream, not JSON text
      responseType: "blob",
    }
  );

  // This will now successfully return a raw Blob object containing your MP3 audio
  return response.data;
};
