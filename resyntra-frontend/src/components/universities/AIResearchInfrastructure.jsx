import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  BookOpen,
  Network,
  ShieldCheck,
  Search,
  Server,
  Cloud,
  Cpu,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Knowledge Graph",
    icon: Network,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Digital Library",
    icon: BookOpen,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Semantic Search",
    icon: Search,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Research Database",
    icon: Database,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Secure Infrastructure",
    icon: ShieldCheck,
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "from-sky-500 to-cyan-500",
  },
];

const AIResearchInfrastructure = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            AI Infrastructure
          </span>

          <h2 className="mt-6 text-5xl font-black">
            One intelligent platform.
            <br />
            Every research service connected.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Resyntra integrates institutional repositories, digital
            libraries, AI services and research intelligence into one
            secure university ecosystem.
          </p>

        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[1.15fr_.85fr]">

          {/* Left */}

          <div className="relative flex h-190 items-center justify-center overflow-hidden rounded-[42px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5">

            {/* Rings */}

            {[170, 280, 390].map((size, index) => (

              <motion.div
                key={size}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 60 - index * 15,
                }}
                className="absolute rounded-full border border-cyan-500/10"
                style={{
                  width: size,
                  height: size,
                }}
              />

            ))}

            {/* AI */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="z-20 flex h-40 w-40 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-violet-500 shadow-[0_0_80px_rgba(34,211,238,.4)]"
            >

              <BrainCircuit
                size={70}
                className="text-white"
              />

            </motion.div>

            {/* Services */}

            {services.map((item, index) => {

              const Icon = item.icon;

              const angle = (360 / services.length) * index;

              const radius = 250;

              const x =
                Math.cos((angle * Math.PI) / 180) * radius;

              const y =
                Math.sin((angle * Math.PI) / 180) * radius;

              return (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    scale: .5,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * .08,
                  }}
                  style={{
                    transform: `translate(${x}px,${y}px)`,
                  }}
                  className="absolute z-30"
                >

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="w-48 rounded-3xl border border-border bg-background/80 p-5 backdrop-blur"
                  >

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${item.color}`}
                    >

                      <Icon className="text-white"/>

                    </div>

                    <h3 className="mt-5 font-bold">
                      {item.title}
                    </h3>

                  </motion.div>

                </motion.div>

              );

            })}

          </div>

          {/* Right */}

          <div className="space-y-6">

            <div className="rounded-[34px] border border-border bg-background/70 p-8">

              <div className="flex items-center gap-3">

                <Cpu className="text-cyan-400"/>

                <h3 className="text-2xl font-bold">
                  AI Processing Engine
                </h3>

              </div>

              <div className="mt-8 space-y-5">

                {[
                  "Research Paper Indexing",
                  "Citation Intelligence",
                  "Knowledge Graph Generation",
                  "Semantic Similarity Search",
                  "Research Gap Detection",
                  "Publication Recommendation",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-border p-5"
                  >

                    <Sparkles
                      size={18}
                      className="text-cyan-400"
                    />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-[34px] border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-violet-500/10 p-8">

              <div className="flex items-center gap-3">

                <Server className="text-cyan-400"/>

                <h3 className="text-xl font-bold">
                  Live Infrastructure
                </h3>

              </div>

              <div className="mt-8 space-y-6">

                <div className="flex justify-between">
                  <span className="text-muted">
                    AI Requests / Day
                  </span>

                  <span className="font-bold">
                    4.2M
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted">
                    Indexed Papers
                  </span>

                  <span className="font-bold">
                    250M+
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted">
                    Knowledge Graph Nodes
                  </span>

                  <span className="font-bold">
                    8.4B
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted">
                    Daily Synchronization
                  </span>

                  <span className="font-bold text-emerald-400">
                    Healthy
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AIResearchInfrastructure;