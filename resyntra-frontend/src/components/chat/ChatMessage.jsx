import { useState } from "react";
import { Bot, Check, Copy, TriangleAlert, User } from "lucide-react";
import clsx from "clsx";

import FormattedAnswer from "./FormattedAnswer";

const ChatMessage = ({ message }) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";
  const isError = message.role === "error";

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
          !isUser && !isError && "border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-indigo-500/10"
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
            !isUser &&
              !isError &&
              "border border-border bg-(--foreground)/2 text-foreground"
          )}
        >
          {isUser || isError ? (
            message.content
          ) : (
            <FormattedAnswer text={message.content} />
          )}
        </div>

        {!isUser && !isError && (
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 self-start px-1 text-xs text-muted opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" /> Copy
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;