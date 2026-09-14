import { motion } from "framer-motion";
import {
  Presentation,
  Sparkles,
  FileText,
  ArrowRight,
  Layers3,
  WandSparkles,
} from "lucide-react";

const PPTGeneratorHero = () => {
  const handleStart = () => {
    document
      .getElementById("ppt-generator-builder")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              <Sparkles className="h-4 w-4" />
              AI Presentation Generator
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Turn your research
              <br />
              paper into a
              <br />
              <span className="text-cyan-400">
                presentation.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              Select a research paper from your Resyntra library and
              let AI transform it into a structured academic
              presentation in just a few moments.
            </p>

            {/* Feature pills */}

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-muted">
                <FileText className="h-4 w-4 text-cyan-400" />
                Use uploaded papers
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-muted">
                <Layers3 className="h-4 w-4 text-cyan-400" />
                9–10 structured slides
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-muted">
                <WandSparkles className="h-4 w-4 text-cyan-400" />
                AI-generated content
              </div>
            </div>

            {/* CTA */}

            <div className="mt-10">
              <button
                type="button"
                onClick={handleStart}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Create Presentation

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Supporting text */}

            <p className="mt-6 text-sm text-muted">
              Built for academic presentations • Powered by
              research-aware AI
            </p>
          </motion.div>

          {/* =====================================================
              RIGHT — PRESENTATION PREVIEW
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Glow */}

            <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-cyan-500/10 blur-[80px]" />

            <div className="relative overflow-hidden rounded-4xl border border-border bg-card p-4 shadow-2xl sm:p-5">
              {/* Top bar */}

              <div className="flex items-center justify-between border-b border-border px-2 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
                </div>

                <span className="text-xs font-medium text-muted">
                  Resyntra / PPT Generator
                </span>

                <Presentation className="h-4 w-4 text-cyan-400" />
              </div>

              {/* Presentation workspace */}

              <div className="mt-5 rounded-3xl border border-border bg-background p-5 sm:p-7">
                {/* Header */}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      AI Presentation
                    </p>

                    <p className="mt-2 text-xs text-muted">
                      Research paper → Academic presentation
                    </p>
                  </div>

                  <div className="rounded-full border border-border bg-card px-3 py-1.5 text-[10px] font-medium text-muted">
                    10 Slides
                  </div>
                </div>

                {/* Main slide */}

                <div className="mt-6 rounded-2xl border border-cyan-500/10 bg-card p-6 sm:p-8">
                  <div className="flex min-h-65 flex-col justify-between">
                    <div>
                      <div className="h-2 w-20 rounded-full bg-cyan-400/60" />

                      <h3 className="mt-7 max-w-sm text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                        Efficient Transformer
                        <br />
                        Models for Edge AI
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-6 text-muted">
                        AI-generated presentation from your
                        research paper.
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />

                        <span className="text-[11px] text-muted">
                          Resyntra AI
                        </span>
                      </div>

                      <span className="text-[11px] text-muted">
                        01 / 10
                      </span>
                    </div>
                  </div>
                </div>

                {/* Slide thumbnails */}

                <div className="mt-5 grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((slide) => (
                    <motion.div
                      key={slide}
                      whileHover={{ y: -3 }}
                      className={`aspect-video rounded-lg border p-2 ${
                        slide === 1
                          ? "border-cyan-400/40 bg-cyan-500/10"
                          : "border-border bg-card"
                      }`}
                    >
                      <div className="h-1 w-8 rounded-full bg-cyan-400/40" />

                      <div className="mt-2 space-y-1">
                        <div className="h-1 w-full rounded-full bg-muted/20" />
                        <div className="h-1 w-3/4 rounded-full bg-muted/20" />
                        <div className="h-1 w-1/2 rounded-full bg-muted/20" />
                      </div>

                      <p className="mt-2 text-[8px] text-muted">
                        0{slide}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom status */}

              <div className="flex items-center justify-between px-2 pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-xs text-muted">
                    Ready to generate
                  </span>
                </div>

                <span className="text-xs font-medium text-cyan-400">
                  AI-powered
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PPTGeneratorHero;