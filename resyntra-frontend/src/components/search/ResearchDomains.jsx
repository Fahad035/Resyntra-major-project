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
  ArrowRight,
} from "lucide-react";

const domains = [
  {
    title: "Artificial Intelligence",
    papers: "4.2M Papers",
    color: "from-cyan-500/20 to-blue-500/10",
    icon: Brain,
    size: "lg:row-span-2",
  },
  {
    title: "Healthcare",
    papers: "2.8M Papers",
    color: "from-rose-500/20 to-pink-500/10",
    icon: HeartPulse,
  },
  {
    title: "Cybersecurity",
    papers: "980K Papers",
    color: "from-emerald-500/20 to-green-500/10",
    icon: Shield,
  },
  {
    title: "Robotics",
    papers: "1.4M Papers",
    color: "from-violet-500/20 to-purple-500/10",
    icon: Cpu,
    size: "lg:col-span-2",
  },
  {
    title: "Climate Science",
    papers: "1.7M Papers",
    color: "from-lime-500/20 to-green-500/10",
    icon: Leaf,
  },
  {
    title: "Economics",
    papers: "1.2M Papers",
    color: "from-amber-500/20 to-orange-500/10",
    icon: Landmark,
  },
  {
    title: "Biotechnology",
    papers: "890K Papers",
    color: "from-sky-500/20 to-cyan-500/10",
    icon: Microscope,
  },
  {
    title: "Space Research",
    papers: "620K Papers",
    color: "from-indigo-500/20 to-blue-500/10",
    icon: Orbit,
  },
];

const ResearchDomains = () => {
  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Research Explorer
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Explore every research domain.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Navigate millions of publications across disciplines with
            AI-powered semantic discovery.
          </p>
        </motion.div>

        <div className="grid auto-rows-[220px] gap-6 md:grid-cols-2 lg:grid-cols-4">

          {domains.map((domain, index) => {
            const Icon = domain.icon;

            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-[28px] border border-border bg-linear-to-br ${domain.color} p-6 ${domain.size || ""}`}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

                <div className="relative flex h-full flex-col">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/70 backdrop-blur">
                    <Icon className="h-7 w-7 text-cyan-400" />
                  </div>

                  <div className="mt-auto">

                    <p className="text-sm text-muted">
                      {domain.papers}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-foreground">
                      {domain.title}
                    </h3>

                    <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-all group-hover:gap-3">
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </button>

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

export default ResearchDomains;