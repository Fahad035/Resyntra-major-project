import { useState } from "react";
import { Bot, Check, Copy, Loader2, TriangleAlert, User, Volume2, VolumeX } from "lucide-react";
import clsx from "clsx";

import FormattedAnswer from "./FormattedAnswer";
import ConfidenceBadge from "./ConfidenceBadge";

const ChatMessage = ({ message, isPlaying, isLoadingAudio, onListen }) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";
  const isError = message.role === "error";
  const isAssistant = !isUser && !isError;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API can fail without permission — fail silently,
      // the copy button just won't confirm.
    }
  };

  return (
    <div className={clsx("group flex gap-3", isUser && "flex-row-reverse")}>
      <span
        className={clsx(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
          isUser && "border-cyan-500/20 bg-cyan-500/10",
          isError && "border-(--danger)/20 bg-(--danger)/10",
          isAssistant && "border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-indigo-500/10"
        )}
      >
        {isUser ? (
          <User className="h-4 w-4 text-cyan-400" />
        ) : isError ? (
          <TriangleAlert className="h-4 w-4 text-(--danger)" />
        ) : (
          <Bot className="h-4 w-4 text-cyan-400" />
        )}
      </span>

      <div className={clsx("flex max-w-[75%] flex-col gap-1.5", isUser && "items-end")}>
        <div
          className={clsx(
            "rounded-2xl px-4 py-3 text-sm leading-6",
            isUser && "bg-cyan-400 text-slate-950",
            isError &&
            "border border-(--danger)/20 bg-(--danger)/5 text-(--danger)",
            isAssistant &&
            "border border-border bg-(--foreground)/2 text-foreground"
          )}
        >
          {isUser || isError ? (
            message.content
          ) : (
            <FormattedAnswer text={message.content} />
          )}
        </div>

        {isAssistant && (
          <div className="flex items-center gap-3 self-start px-1">
            {message.confidence && (
              <ConfidenceBadge confidence={message.confidence} />
            )}

            <div className="flex items-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs text-muted hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => onListen?.(message)}
                disabled={isLoadingAudio}
                className={clsx(
                  "flex items-center gap-1 text-xs hover:text-foreground disabled:cursor-wait",
                  isPlaying ? "text-cyan-400" : "text-muted"
                )}
              >
                {isLoadingAudio ? (
                  <>
                    <Loader2 className="h-3 w-3 animate-spin" />
                    Loading
                  </>
                ) : isPlaying ? (
                  <>
                    <VolumeX className="h-3 w-3" />
                    Stop
                  </>
                ) : (
                  <>
                    <Volume2 className="h-3 w-3" />
                    Listen
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;