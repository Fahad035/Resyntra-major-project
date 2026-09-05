import { motion } from "framer-motion";
import {
  GitCompare,
  FileSearch,
  ScrollText,
  Lightbulb,
} from "lucide-react";

const conversations = [
  {
    icon: GitCompare,
    title: "Compare Multiple Papers",
    question:
      "Compare the Transformer paper with BERT. What are the biggest architectural differences?",
    answer:
      "Transformer introduces encoder-decoder self-attention while BERT focuses on bidirectional pre-training for language understanding. BERT removes the decoder and optimizes masked language modeling instead of sequence generation.",
    tags: ["2 Papers", "Architecture", "Comparison"],
  },
  {
    icon: ScrollText,
    title: "Generate Literature Reviews",
    question:
      "Write a literature review about Retrieval-Augmented Generation using my uploaded papers.",
    answer:
      "Based on your library, AI synthesizes common findings, identifies trends, groups similar approaches, and automatically cites the original publications.",
    tags: ["Literature Review", "Citations", "Academic Writing"],
  },
  {
    icon: FileSearch,
    title: "Extract Evidence",
    question:
      "Which paper reports the highest BLEU score and where is it mentioned?",
    answer:
      "The AI identifies the exact paper, highlights the corresponding table, and references the page containing the reported experimental results.",
    tags: ["Evidence", "Page Citation", "Tables"],
  },
  {
    icon: Lightbulb,
    title: "Discover Research Opportunities",
    question:
      "Based on these papers, what research gaps still exist?",
    answer:
      "Resyntra analyzes limitations across papers, finds recurring unanswered questions, and proposes potential future research directions.",
    tags: ["Research Gap", "Future Work", "AI Insight"],
  },
];

const ChatFeatures = () => {
  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Research Conversations
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground lg:text-5xl">
            More than a chatbot.
            <br />
            A research collaborator.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Every conversation is grounded in your uploaded papers with
            citations, evidence and contextual understanding.
          </p>
        </motion.div>

        <div className="space-y-10">

          {conversations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-border bg-card p-8 lg:p-10"
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-cyan-500/10 p-4">
                    <Icon className="h-7 w-7 text-cyan-400" />
                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-background px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

                <div className="mt-10 space-y-6">

                  <div className="ml-auto max-w-2xl rounded-2xl bg-background p-6">
                    <p className="font-medium text-foreground">
                      {item.question}
                    </p>
                  </div>

                  <div className="max-w-3xl rounded-2xl bg-cyan-500/10 p-6">
                    <p className="leading-8 text-foreground">
                      {item.answer}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-400">
                        Source: Page 5
                      </span>

                      <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-400">
                        Confidence: High
                      </span>

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ChatFeatures;