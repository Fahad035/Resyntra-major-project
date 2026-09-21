import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import { synthesizeSpeech } from "@/api/voice";

/**
 * Plays one chat answer aloud at a time via the backend's Murf AI
 * endpoint. Only one message can be "speaking" at once — starting a
 * new one stops whatever was already playing.
 */
const useTextToSpeech = () => {
  const [playingId, setPlayingId] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const audioRef = useRef(null);
  
  // Track the active memory URL to cleanly revoke it and prevent browser memory leaks
  const activeUrlRef = useRef(null);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const handleEnded = () => {
      setPlayingId(null);
      if (activeUrlRef.current) {
        URL.revokeObjectURL(activeUrlRef.current);
        activeUrlRef.current = null;
      }
    };
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
      if (activeUrlRef.current) {
        URL.revokeObjectURL(activeUrlRef.current);
      }
    };
  }, []);

  const stop = useCallback(() => {
    audioRef.current?.pause();
    setPlayingId(null);
    if (activeUrlRef.current) {
      URL.revokeObjectURL(activeUrlRef.current);
      activeUrlRef.current = null;
    }
  }, []);

  const toggle = useCallback(
    async (message) => {
      if (playingId === message.id) {
        stop();
        return;
      }

      // Switching to a different message — stop whatever's playing and clear old URLs.
      stop();

      try {
        setLoadingId(message.id);
        
        // 1. Fetch the raw binary array block from your modified Axios client
        const audioBlob = await synthesizeSpeech(message.content, "Joshua");

        // 2. Generate a local browser resource string mapping to the binary memory data
        const localAudioUrl = URL.createObjectURL(audioBlob);
        activeUrlRef.current = localAudioUrl;

        // 3. Assign the memory pointer source to the persistent HTML5 Audio element instance
        audioRef.current.src = localAudioUrl;
        
        await audioRef.current.play();
        setPlayingId(message.id);
      } catch (error) {
        console.error("Playback execution failed:", error);
        toast.error(
          error?.response?.data?.detail ||
            "Couldn't generate audio for that answer."
        );
        stop();
      } finally {
        setLoadingId(null);
      }
    },
    [playingId, stop]
  );

  return { playingId, loadingId, toggle, stop };
};

export default useTextToSpeech;
