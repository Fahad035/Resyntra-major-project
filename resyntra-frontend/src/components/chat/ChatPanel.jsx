import { useEffect, useRef, useState } from "react";
import { FileText, Loader2, Mic, MicOff, MessageSquareText, RotateCcw, Send } from "lucide-react";
import toast from "react-hot-toast";

import useChat from "@/hooks/useChat";
import useSpeechToText from "@/hooks/useSpeechToText";

import ChatMessage from "./ChatMessage";
import PaperStatusBadge from "./PaperStatusBadge";
import SuggestedPrompts from "./SuggestedPrompts";
import ThinkingIndicator from "./ThinkingIndicator";

const EmptyState = () => (
  <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-(--foreground)/5">
      <MessageSquareText className="h-6 w-6 text-muted" />
    </span>
    <h3 className="font-semibold text-foreground">
      Select a paper to start chatting
    </h3>
    <p className="max-w-sm text-sm text-muted">
      Upload a PDF on the left, wait for it to finish processing, then ask
      it anything — Resyntra answers using only that paper's content.
    </p>
  </div>
);

const MAX_TEXTAREA_HEIGHT = 160;

const ChatPanel = ({ paper }) => {
  const { messages, sending, send, reset } = useChat(paper?.id);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const textareaRef = useRef(null);

  const { isSupported: micSupported, isListening, start, stop } =
    useSpeechToText((transcript) => {
      setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
    });

  useEffect(() => {
    reset();
    setInput("");
  }, [paper?.id, reset]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, sending]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`;
  }, [input]);

  if (!paper) {
    return <EmptyState />;
  }

  const isReady = paper.processing_status === "completed";

  const submitQuestion = (question) => {
    if (!question.trim() || sending || !isReady) return;
    send(question.trim());
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitQuestion(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitQuestion(input);
    }
  };

  const toggleMic = () => {
    if (!micSupported) {
      toast.error("Voice input isn't supported in this browser — try Chrome or Edge.");
      return;
    }
    isListening ? stop() : start();
  };

  const handleNewChat = () => {
    reset();
    setInput("");
    if (isListening) stop();
  };

  return (
    <div className="flex h-full min-h-0 min-w-0 flex-col">
      {/* Header */}
      <div className="flex min-w-0 items-center gap-3 border-b border-border p-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-indigo-500/10">
          <FileText className="h-4 w-4 text-cyan-400" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-foreground">{paper.title}</p>
          <PaperStatusBadge status={paper.processing_status} />
        </div>

        <button
          type="button"
          onClick={handleNewChat}
          disabled={sending || messages.length === 0}
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-(--foreground)/2 px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-cyan-400/40 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          New Chat
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="min-h-0 flex-1 space-y-5 overflow-y-auto p-5">
        {!isReady ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <Loader2 className="h-6 w-6 animate-spin text-cyan-400" />
            <p className="max-w-sm text-sm text-muted">
              {paper.processing_status === "failed"
                ? "This paper failed to process. Try deleting it and uploading again."
                : "This paper is still being indexed. Chat unlocks automatically once it's ready."}
            </p>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <SuggestedPrompts onSelect={submitQuestion} />
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}

        {sending && <ThinkingIndicator />}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex min-w-0 items-end gap-3 border-t border-border p-4"
      >
        <button
          type="button"
          onClick={toggleMic}
          disabled={!isReady || sending}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
            isListening
              ? "border-(--danger)/30 bg-(--danger)/10 text-(--danger)"
              : "border-border bg-(--foreground)/2 text-muted hover:text-foreground"
          }`}
          aria-label={isListening ? "Stop voice input" : "Start voice input"}
        >
          {isListening ? (
            <MicOff className="h-4 w-4 animate-pulse" />
          ) : (
            <Mic className="h-4 w-4" />
          )}
        </button>

        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={!isReady || sending}
          placeholder={
            isReady
              ? isListening
                ? "Listening..."
                : "Ask a question about this paper..."
              : "Waiting for this paper to finish processing..."
          }
          className="max-h-40 flex-1 resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-cyan-400 disabled:opacity-60"
        />

        <button
          type="submit"
          disabled={!isReady || sending || !input.trim()}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Send"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default ChatPanel;