import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  Shield,
  Cpu,
  Leaf,
  Landmark,
  Microscope,
  Orbit,
  ArrowUpRight,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const domains = [
  {
    title: "Artificial Intelligence",
    shortTitle: "AI",
    papers: "4.2M",
    description:
      "Explore machine learning, generative AI, neural networks, and intelligent systems.",
    icon: Brain,
    featured: true,
  },
  {
    title: "Healthcare",
    shortTitle: "Healthcare",
    papers: "2.8M",
    description:
      "Discover research in medical AI, diagnostics, biotechnology, and digital health.",
    icon: HeartPulse,
  },
  {
    title: "Cybersecurity",
    shortTitle: "Security",
    papers: "980K",
    description:
      "Research covering threat detection, privacy, cryptography, and secure systems.",
    icon: Shield,
  },
  {
    title: "Robotics",
    shortTitle: "Robotics",
    papers: "1.4M",
    description:
      "Explore autonomous systems, robotic perception, control, and human-robot interaction.",
    icon: Cpu,
  },
  {
    title: "Climate Science",
    shortTitle: "Climate",
    papers: "1.7M",
    description:
      "Explore climate modeling, sustainability, environmental systems, and renewable energy.",
    icon: Leaf,
  },
  {
    title: "Economics",
    shortTitle: "Economics",
    papers: "1.2M",
    description:
      "Discover research in finance, markets, policy, development, and economic behavior.",
    icon: Landmark,
  },
  {
    title: "Biotechnology",
    shortTitle: "Biotech",
    papers: "890K",
    description:
      "Explore genomics, molecular biology, bioengineering, and computational biology.",
    icon: Microscope,
  },
  {
    title: "Space Research",
    shortTitle: "Space",
    papers: "620K",
    description:
      "Research covering astrophysics, astronomy, planetary science, and space exploration.",
    icon: Orbit,
  },
];

const ResearchDomains = () => {
  const navigate = useNavigate();

  const handleExplore = (domain) => {
    navigate(
      `/platform/semantic-search?q=${encodeURIComponent(
        domain.title
      )}`
    );
  };

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Section Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-16"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-400" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Research Explorer
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-foreground lg:text-6xl">
                One search.
                <br />
                <span className="text-muted">
                  Every research domain.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Explore research across disciplines and discover
                relevant literature using Resyntra's semantic
                understanding.
              </p>

            </div>

            <div className="hidden max-w-xs lg:block">
              <p className="text-sm leading-7 text-muted">
                Search by concept, research problem, methodology,
                or scientific idea — not just exact keywords.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Featured Domain */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="group relative mb-6 overflow-hidden rounded-4xl border border-border bg-card"
        >
          {/* Featured glow */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative grid min-h-90 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Main content */}

            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">

              <div>

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                    <Brain className="h-8 w-8 text-cyan-400" />
                  </div>

                  <span className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted">
                    Featured Domain
                  </span>

                </div>

                <p className="mt-10 text-sm font-medium text-cyan-400">
                  4.2M research papers
                </p>

                <h3 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  Artificial Intelligence
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                  Explore machine learning, generative AI,
                  natural language processing, computer vision,
                  neural networks, and intelligent systems.
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  handleExplore(
                    domains[0]
                  )
                }
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Explore AI Research

                <ArrowUpRight className="h-4 w-4" />
              </button>

            </div>

            {/* Visual side */}

            <div className="relative hidden overflow-hidden border-l border-border bg-background lg:block">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_65%)]" />

              <div className="relative flex h-full items-center justify-center">

                {/* Decorative rings */}

                <div className="absolute h-72 w-72 rounded-full border border-cyan-500/10" />

                <div className="absolute h-52 w-52 rounded-full border border-cyan-500/10" />

                <div className="absolute h-32 w-32 rounded-full border border-cyan-500/20" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/20 bg-card shadow-2xl">
                  <Brain className="h-11 w-11 text-cyan-400" />
                </div>

                {/* Orbit points */}

                <div className="absolute left-[24%] top-[30%] h-3 w-3 rounded-full bg-cyan-400" />

                <div className="absolute right-[25%] top-[25%] h-2 w-2 rounded-full bg-cyan-400/70" />

                <div className="absolute bottom-[28%] left-[30%] h-2 w-2 rounded-full bg-cyan-400/60" />

                <div className="absolute bottom-[25%] right-[30%] h-3 w-3 rounded-full bg-cyan-400/80" />

              </div>

            </div>

          </div>
        </motion.div>

        {/* Domain Grid */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {domains.slice(1).map(
            (domain, index) => {
              const Icon = domain.icon;

              return (
                <motion.button
                  key={domain.title}
                  type="button"
                  onClick={() =>
                    handleExplore(
                      domain
                    )
                  }
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay:
                      index * 0.05,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 text-left transition hover:border-cyan-500/30"
                >

                  {/* Hover glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl transition group-hover:bg-cyan-500/10" />

                  <div className="relative">

                    <div className="flex items-start justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background transition group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5">

                        <Icon className="h-6 w-6 text-muted transition group-hover:text-cyan-400" />

                      </div>

                      <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition group-hover:opacity-100 group-hover:text-cyan-400" />

                    </div>

                    <div className="mt-8">

                      <p className="text-xs font-medium uppercase tracking-wider text-muted">
                        {domain.papers} papers
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-foreground">
                        {domain.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                        {domain.description}
                      </p>

                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400">
                      <Search className="h-4 w-4" />
                      Explore research
                    </div>

                  </div>

                </motion.button>
              );
            }
          )}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-6 rounded-3xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

            <div>

              <p className="text-sm font-medium text-cyan-400">
                Can't find your field?
              </p>

              <h3 className="mt-2 text-xl font-semibold text-foreground">
                Search across disciplines with natural language.
              </h3>

            </div>

            <button
              type="button"
              onClick={() =>
                document
                  .querySelector(
                    'input[placeholder="Search research papers..."]'
                  )
                  ?.focus()
              }
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Search className="h-4 w-4" />
              Start a search
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ResearchDomains;