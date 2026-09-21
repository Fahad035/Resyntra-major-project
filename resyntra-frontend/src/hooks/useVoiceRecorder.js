import { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";

import { transcribeAudio } from "@/api/voice";

const isSupported =
  typeof navigator !== "undefined" &&
  Boolean(navigator.mediaDevices?.getUserMedia) &&
  typeof MediaRecorder !== "undefined";

/**
 * Records a short voice clip from the mic and sends it to the backend
 * (Deepgram) for transcription, rather than relying on the browser's
 * built-in (Chrome/Edge-only) speech recognition.
 *
 * @param {(text: string) => void} onTranscript
 */
const useVoiceRecorder = (onTranscript) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const streamRef = useRef(null);

  const cleanupStream = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  };

  const start = useCallback(async () => {
    if (!isSupported) {
      toast.error("Voice input isn't supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];

      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        cleanupStream();

        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || "audio/webm",
        });

        if (blob.size === 0) return;

        try {
          setIsTranscribing(true);
          const { text } = await transcribeAudio(blob);
          onTranscript?.(text);
        } catch (error) {
          toast.error(
            error?.response?.data?.detail ||
              "Couldn't transcribe that — try again."
          );
        } finally {
          setIsTranscribing(false);
        }
      };

      recorder.start();
      setIsRecording(true);
    } catch (error) {
      toast.error("Microphone access was denied.");
    }
  }, [onTranscript]);

  const stop = useCallback(() => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  }, []);

  return { isSupported, isRecording, isTranscribing, start, stop };
};

export default useVoiceRecorder;