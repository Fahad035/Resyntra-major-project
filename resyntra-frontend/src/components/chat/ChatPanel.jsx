import { useEffect, useRef, useState } from "react";
import { FileText, Loader2, Mic, MessageSquareText, RotateCcw, Send, Square } from "lucide-react";

import useChat from "@/hooks/useChat";
import useVoiceRecorder from "@/hooks/useVoiceRecorder";
import useTextToSpeech from "@/hooks/useTextToSpeech";

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

  const {
    isSupported: micSupported,
    isRecording,
    isTranscribing,
    start: startRecording,
    stop: stopRecording,
  } = useVoiceRecorder((transcript) => {
    setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
  });

  const { playingId, loadingId, toggle: toggleSpeech, stop: stopSpeech } =
    useTextToSpeech();

  useEffect(() => {
    reset();
    setInput("");
    stopSpeech();
  }, [paper?.id, reset, stopSpeech]);

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
    isRecording ? stopRecording() : startRecording();
  };

  const handleNewChat = () => {
    reset();
    setInput("");
    stopSpeech();
    if (isRecording) stopRecording();
  };

  const micDisabled = !isReady || sending || isTranscribing || !micSupported;

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
            <ChatMessage
              key={message.id}
              message={message}
              isPlaying={playingId === message.id}
              isLoadingAudio={loadingId === message.id}
              onListen={toggleSpeech}
            />
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
          disabled={micDisabled}
          title={
            micSupported
              ? "Voice input"
              : "Voice input needs microphone access in this browser"
          }
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
            isRecording
              ? "border-(--danger)/30 bg-(--danger)/10 text-(--danger)"
              : "border-border bg-(--foreground)/2 text-muted hover:text-foreground"
          }`}
          aria-label={isRecording ? "Stop recording" : "Start voice input"}
        >
          {isTranscribing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isRecording ? (
            <Square className="h-3.5 w-3.5 fill-current" />
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
              ? isRecording
                ? "Listening..."
                : isTranscribing
                ? "Transcribing..."
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