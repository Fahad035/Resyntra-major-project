import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Globe,
  BookOpen,
  BrainCircuit,
  Flame,
} from "lucide-react";

const lineData = [22, 38, 30, 48, 42, 70, 62, 90];

const topics = [
  "Agentic AI",
  "Multimodal Models",
  "Graph RAG",
  "Quantum Computing",
  "Medical AI",
];

const authors = [
  { name: "Andrew Ng", score: 98 },
  { name: "Yoshua Bengio", score: 96 },
  { name: "Geoffrey Hinton", score: 95 },
  { name: "Fei-Fei Li", score: 94 },
];

const publications = [
  {
    title: "Graph Neural Networks Survey",
    field: "AI",
    citations: "12.8K",
  },
  {
    title: "Vision-Language Models",
    field: "CV",
    citations: "8.9K",
  },
  {
    title: "Retrieval-Augmented Generation",
    field: "NLP",
    citations: "15.2K",
  },
];

const countries = [
  { country: "USA", papers: "840K" },
  { country: "China", papers: "690K" },
  { country: "UK", papers: "310K" },
  { country: "Germany", papers: "280K" },
];

const ResearchDashboard = () => {
  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Growth Chart */}

          <motion.div
            whileHover={{ y: -6 }}
            className="lg:col-span-2 rounded-[30px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5 p-8"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted">
                  Publication Growth
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Research Activity
                </h3>

              </div>

              <TrendingUp className="h-8 w-8 text-cyan-400" />

            </div>

            <div className="mt-12 flex h-72 items-end gap-4">

              {lineData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${item}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .8,
                    delay: i * .08,
                  }}
                  className="flex-1 rounded-t-2xl bg-linear-to-t from-cyan-500 to-violet-500"
                />
              ))}

            </div>

          </motion.div>

          {/* Trending */}

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[30px] border border-border bg-linear-to-br from-orange-500/5 via-background to-red-500/5 p-8"
          >

            <div className="flex items-center gap-3">

              <Flame className="h-7 w-7 text-orange-400" />

              <h3 className="text-2xl font-bold">
                Trending Topics
              </h3>

            </div>

            <div className="mt-8 space-y-4">

              {topics.map((topic) => (

                <div
                  key={topic}
                  className="flex items-center justify-between rounded-2xl border border-border bg-background p-4"
                >

                  <span>{topic}</span>

                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
                    Hot
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Second Row */}

        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* Authors */}

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[30px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-blue-500/5 p-8"
          >

            <div className="flex items-center gap-3">

              <Users className="h-6 w-6 text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Top Authors
              </h3>

            </div>

            <div className="mt-8 space-y-5">

              {authors.map((author) => (

                <div
                  key={author.name}
                  className="flex items-center justify-between"
                >

                  <span>{author.name}</span>

                  <span className="font-semibold text-cyan-400">
                    {author.score}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Countries */}

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[30px] border border-border bg-linear-to-br from-emerald-500/5 via-background to-lime-500/5 p-8"
          >

            <div className="flex items-center gap-3">

              <Globe className="h-6 w-6 text-emerald-400" />

              <h3 className="text-2xl font-bold">
                Research by Country
              </h3>

            </div>

            <div className="mt-8 space-y-5">

              {countries.map((item) => (

                <div
                  key={item.country}
                  className="flex items-center justify-between rounded-xl border border-border bg-background p-4"
                >

                  <span>{item.country}</span>

                  <span className="text-emerald-400">
                    {item.papers}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* AI Summary */}

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[30px] border border-border bg-linear-to-br from-violet-500/5 via-background to-cyan-500/5 p-8"
          >

            <div className="flex items-center gap-3">

              <BrainCircuit className="h-6 w-6 text-violet-400" />

              <h3 className="text-2xl font-bold">
                AI Insight
              </h3>

            </div>

            <p className="mt-8 leading-8 text-muted">
              AI predicts that research related to multimodal foundation
              models and autonomous research agents will experience the
              fastest publication growth over the next two years.
            </p>

          </motion.div>

        </div>

        {/* Publications */}

        <motion.div
          whileHover={{ y: -5 }}
          className="mt-8 rounded-[30px] border border-border bg-linear-to-br from-cyan-500/4 via-background to-violet-500/4 p-8"
        >

          <div className="flex items-center gap-3">

            <BookOpen className="h-6 w-6 text-cyan-400" />

            <h3 className="text-2xl font-bold">
              Most Influential Publications
            </h3>

          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">

            <table className="w-full">

              <thead className="bg-background">

                <tr className="text-left">

                  <th className="p-5">Paper</th>
                  <th className="p-5">Field</th>
                  <th className="p-5">Citations</th>

                </tr>

              </thead>

              <tbody>

                {publications.map((paper) => (

                  <tr
                    key={paper.title}
                    className="border-t border-border hover:bg-background/60"
                  >

                    <td className="p-5">{paper.title}</td>
                    <td className="p-5">{paper.field}</td>
                    <td className="p-5 text-cyan-400">{paper.citations}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ResearchDashboard;