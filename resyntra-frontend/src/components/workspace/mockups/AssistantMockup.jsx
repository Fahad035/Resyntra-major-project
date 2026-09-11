import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

import { motion } from "framer-motion";

import {
  Bot,
  Sparkles,
  Send,
  BrainCircuit,
  User,
  Loader2,
  BookOpen,
  ChevronDown,
} from "lucide-react";

import toast from "react-hot-toast";

import { getPapers } from "@/api/papers";
import { askQuestion } from "@/api/chat";

const AssistantMockup = () => {
  const [papers, setPapers] = useState([]);

  const [selectedPaper, setSelectedPaper] =
    useState("");

  const [question, setQuestion] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const [loadingPapers, setLoadingPapers] =
    useState(true);

  const [sending, setSending] =
    useState(false);

  const messagesEndRef = useRef(null);

  /*
  --------------------------------------------------
  Load Papers
  --------------------------------------------------
  */

  const loadPapers = useCallback(async () => {
  try {
    setLoadingPapers(true);
    const data = await getPapers();
    setPapers(data);

    if (data && data.length > 0) {
      // Binds either field strategy securely
      const initialId = data[0].id || data[0].paper_id; 
      setSelectedPaper(initialId);
    }
  } catch (error) {
    console.error(error);
    toast.error("Unable to load your papers.");
  } finally {
    setLoadingPapers(false);
  }
}, []);



  useEffect(() => {
  loadPapers();
}, [loadPapers]);

  /*
  --------------------------------------------------
  Auto Scroll
  --------------------------------------------------
  */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  /*
  --------------------------------------------------
  Send Question
  --------------------------------------------------
  */

  const handleSend = async () => {
    if (!selectedPaper) {
      toast.error(
        "Please select a paper."
      );
      return;
    }

    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentQuestion = question;

    setQuestion("");

    try {
      setSending(true);

      const response = await askQuestion(
        selectedPaper,
        currentQuestion
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.detail ??
        "Failed to get AI response."
      );
    } finally {
      setSending(false);
    }
  };

  /*
  --------------------------------------------------
  Send on Enter
  --------------------------------------------------
  */

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      handleSend();
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card
        shadow-[0_30px_80px_rgba(0,0,0,.18)]
      "
    >
      {/* ================= Header ================= */}

      <div className="flex items-center justify-between border-b border-border px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-cyan-500/15 p-3">

            <Bot className="h-5 w-5 text-cyan-400" />

          </div>

          <div>

            <h3 className="font-semibold text-foreground">
              AI Research Assistant
            </h3>

            <p className="text-xs text-emerald-500">
              ● Online
            </p>

          </div>

        </div>

        <Sparkles className="h-5 w-5 text-cyan-400" />

      </div>

      {/* ================= Paper Selector ================= */}

      <div className="border-b border-border bg-background px-6 py-4">

        <label className="mb-2 flex items-center gap-2 text-sm font-medium">

          <BookOpen className="h-4 w-4 text-cyan-400" />

          Select Paper

        </label>

        <div className="relative">

          <select
            value={selectedPaper}
            onChange={(e) =>
              setSelectedPaper(e.target.value)
            }
            disabled={loadingPapers}
            className="
              w-full
              appearance-none
              rounded-xl
              border
              border-border
              bg-card
              px-4
              py-3
              pr-10
              text-sm
              outline-none
              transition
              focus:border-cyan-400
            "
          >

            {loadingPapers ? (

              <option>
                Loading papers...
              </option>

            ) : papers.length === 0 ? (

              <option>
                No papers uploaded
              </option>

            ) : (

              papers.map((paper) => (

                <option
                  key={paper.id}
                  value={paper.id}
                >
                  {paper.title}
                </option>

              ))

            )}

          </select>

          <ChevronDown
            className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              h-5
              w-5
              -translate-y-1/2
              text-muted
            "
          />

        </div>

      </div>

      {/* ================= Chat ================= */}

      <div
        className="
          h-130
          overflow-y-auto
          space-y-5
          bg-background
          px-6
          py-6
        "
      >

        {messages.length === 0 && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              flex
              h-full
              flex-col
              items-center
              justify-center
              text-center
            "
          >

            <Bot className="mb-5 h-16 w-16 text-cyan-400" />

            <h3 className="text-xl font-bold">
              Ask anything about your paper
            </h3>

            <p className="mt-3 max-w-md text-muted">

              Upload a research paper, choose it above,
              and start asking questions about the
              methodology, findings, citations,
              limitations, or research gaps.

            </p>

          </motion.div>

        )}

        {messages.map((message, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className={`flex ${message.role === "user"
                ? "justify-end"
                : "justify-start"
              }`}
          >

            <div
              className={`flex max-w-[85%] gap-3 ${message.role === "user"
                  ? "flex-row-reverse"
                  : ""
                }`}
            >

              <div
                className={`
                  mt-1
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  ${message.role === "user"
                    ? "bg-primary text-black"
                    : "bg-cyan-500/20 text-cyan-400"
                  }
                `}
              >

                {message.role === "user" ? (

                  <User className="h-5 w-5" />

                ) : (

                  <BrainCircuit className="h-5 w-5" />

                )}

              </div>

              <div
                className={`
                  rounded-2xl
                  px-5
                  py-4
                  text-sm
                  leading-7
                  whitespace-pre-wrap
                  ${message.role === "user"
                    ? "bg-primary text-black"
                    : "border border-border bg-card text-foreground"
                  }
                `}
              >

                {message.content}

              </div>

            </div>

          </motion.div>

        ))}

        {sending && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="flex items-center gap-3"
          >

            <div className="rounded-full bg-cyan-500/20 p-3">

              <Loader2 className="h-5 w-5 animate-spin text-cyan-400" />

            </div>

            <div className="rounded-2xl border border-border bg-card px-5 py-4">

              AI is thinking...

            </div>

          </motion.div>

        )}

        <div ref={messagesEndRef} />

      </div>
      {/* ================= Input ================= */}

      <div className="border-t border-border bg-card px-6 py-5">

        <div className="flex items-end gap-3">

          <textarea
            rows={2}
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder={
              selectedPaper
                ? "Ask anything about this paper..."
                : "Upload and select a paper first..."
            }
            disabled={
              sending ||
              loadingPapers ||
              papers.length === 0
            }
            className="
              flex-1
              resize-none
              rounded-2xl
              border
              border-border
              bg-background
              px-5
              py-4
              text-sm
              outline-none
              transition
              focus:border-cyan-400
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          />

          <button
            onClick={handleSend}
            disabled={
              sending ||
              !question.trim() ||
              !selectedPaper
            }
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-cyan-500
              text-slate-950
              transition
              hover:scale-105
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >

            {sending ? (

              <Loader2 className="h-5 w-5 animate-spin" />

            ) : (

              <Send className="h-5 w-5" />

            )}

          </button>

        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-muted">

          <span>

            AI answers are generated from your uploaded research paper.

          </span>

          <span>

            Press <kbd className="rounded bg-background px-2 py-1">Enter</kbd> to send

          </span>

        </div>

      </div>

    </motion.div>
  );
};

export default AssistantMockup;