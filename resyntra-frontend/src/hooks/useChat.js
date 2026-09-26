import { useCallback, useState } from "react";

import { askQuestion } from "@/api/chat";

let messageId = 0;

const nextId = () => `msg-${Date.now()}-${messageId++}`;

const useChat = (paperId) => {
  const [messages, setMessages] = useState([]);
  const [sending, setSending] = useState(false);

  const reset = useCallback(() => setMessages([]), []);

  const send = useCallback(
    async (question) => {
      if (!question.trim() || !paperId) return;

      const userMessage = {
        id: nextId(),
        role: "user",
        content: question,
      };

      setMessages((prev) => [...prev, userMessage]);
      setSending(true);

      try {
        const {
          answer,
          confidence,
          sources,
        } = await askQuestion(paperId, question);

        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            role: "assistant",
            content: answer,
            confidence,
            sources,
          },
        ]);
      } catch (error) {
        const detail = error?.response?.data?.detail;

        const fallback =
          error?.response?.status === 409
            ? "This paper is still processing — give it a little longer."
            : "Something went wrong answering that. Please try again.";

        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            role: "error",
            content: detail || fallback,
          },
        ]);
      } finally {
        setSending(false);
      }
    },
    [paperId]
  );

  return {
    messages,
    sending,
    send,
    reset,
  };
};

export default useChat;