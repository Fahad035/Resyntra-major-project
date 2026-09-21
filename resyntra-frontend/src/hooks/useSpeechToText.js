import { useCallback, useEffect, useRef, useState } from "react";

// Chrome/Edge ship this under a vendor prefix; Firefox and most of
// Safari don't implement it at all, so we feature-detect rather than
// assume it exists.
const SpeechRecognitionAPI =
  typeof window !== "undefined"
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

/**
 * Voice-to-text for the chat input, backed by the browser's built-in
 * Web Speech API — no network call, no API key.
 *
 * @param {(text: string) => void} onResult - called with the final
 *   transcript once the user stops speaking.
 */
const useSpeechToText = (onResult) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const onResultRef = useRef(onResult);
  onResultRef.current = onResult;

  const isSupported = Boolean(SpeechRecognitionAPI);

  useEffect(() => {
    if (!isSupported) return undefined;

    const recognition = new SpeechRecognitionAPI();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0]?.[0]?.transcript?.trim();
      if (transcript) onResultRef.current?.(transcript);
    };

    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
      recognitionRef.current = null;
    };
  }, [isSupported]);

  const start = useCallback(() => {
    if (!recognitionRef.current || isListening) return;

    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch {
      // start() throws if it's already running — safe to ignore.
    }
  }, [isListening]);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return { isSupported, isListening, start, stop };
};

export default useSpeechToText;