import { motion } from "framer-motion";
import {
  BrainCircuit,
  Building2,
  Cpu,
  Microscope,
  HeartPulse,
  Atom,
  Leaf,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const departments = [
  {
    icon: Cpu,
    title: "Computer Science",
    papers: "2,480",
    funding: "$18.4M",
    color: "from-cyan-500 to-sky-500",
    x: "50%",
    y: "12%",
  },
  {
    icon: HeartPulse,
    title: "Medicine",
    papers: "1,924",
    funding: "$26.8M",
    color: "from-rose-500 to-pink-500",
    x: "20%",
    y: "34%",
  },
  {
    icon: Atom,
    title: "Physics",
    papers: "1,410",
    funding: "$14.2M",
    color: "from-violet-500 to-fuchsia-500",
    x: "80%",
    y: "34%",
  },
  {
    icon: Microscope,
    title: "Biotechnology",
    papers: "1,126",
    funding: "$17.9M",
    color: "from-emerald-500 to-teal-500",
    x: "28%",
    y: "74%",
  },
  {
    icon: Leaf,
    title: "Environmental Science",
    papers: "894",
    funding: "$11.6M",
    color: "from-lime-500 to-green-500",
    x: "72%",
    y: "74%",
  },
];

const CampusResearchHub = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Campus Research Hub
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Every department.
            <br />
            One AI research ecosystem.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Connect departments, discover interdisciplinary opportunities,
            and accelerate innovation through AI-powered institutional
            intelligence.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.15fr_.85fr]">

          {/* Campus Network */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-180 overflow-hidden rounded-[40px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5"
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_70%)]" />

            {/* Connection Lines */}

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line x1="50" y1="15" x2="20" y2="36" stroke="#22d3ee" strokeOpacity=".25"/>
              <line x1="50" y1="15" x2="80" y2="36" stroke="#22d3ee" strokeOpacity=".25"/>
              <line x1="20" y1="36" x2="28" y2="74" stroke="#10b981" strokeOpacity=".18"/>
              <line x1="80" y1="36" x2="72" y2="74" stroke="#8b5cf6" strokeOpacity=".18"/>
              <line x1="28" y1="74" x2="72" y2="74" stroke="#f59e0b" strokeOpacity=".18"/>
              <line x1="20" y1="36" x2="80" y2="36" stroke="#64748b" strokeOpacity=".15"/>
            </svg>

            {/* Center */}

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-violet-500 shadow-2xl"
            >

              <BrainCircuit
                size={52}
                className="text-white"
              />

            </motion.div>

            {/* Departments */}

            {departments.map((dept, index) => {

              const Icon = dept.icon;

              return (

                <motion.div
                  key={dept.title}
                  initial={{
                    opacity: 0,
                    scale: .7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * .08,
                  }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  style={{
                    left: dept.x,
                    top: dept.y,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >

                  <div className="w-60 rounded-3xl border border-border bg-background/80 p-5 backdrop-blur">

                    <div className="flex items-center gap-4">

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${dept.color}`}
                      >

                        <Icon className="text-white"/>

                      </div>

                      <div>

                        <h3 className="font-bold">
                          {dept.title}
                        </h3>

                        <p className="text-sm text-muted">
                          {dept.papers} Publications
                        </p>

                      </div>

                    </div>

                    <div className="mt-5 rounded-xl bg-cyan-500/10 p-3 text-sm text-cyan-400">
                      Research Funding {dept.funding}
                    </div>

                  </div>

                </motion.div>

              );

            })}

          </motion.div>

          {/* AI Suggestions */}

          <div className="space-y-6">

            <div className="rounded-[34px] border border-border bg-background/70 p-8">

              <div className="flex items-center gap-3">

                <Sparkles className="text-cyan-400"/>

                <h3 className="text-xl font-bold">
                  AI Collaboration Opportunities
                </h3>

              </div>

              <div className="mt-8 space-y-5">

                {[
                  "Computer Science ↔ Medicine",
                  "Physics ↔ Biotechnology",
                  "Environmental Science ↔ AI",
                  "Medicine ↔ Data Science",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-border p-5"
                  >

                    <span className="font-medium">
                      {item}
                    </span>

                    <ArrowRight
                      size={18}
                      className="text-cyan-400"
                    />

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-[34px] border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-violet-500/10 p-8">

              <div className="flex items-center gap-3">

                <Building2 className="text-cyan-400"/>

                <h3 className="text-xl font-bold">
                  Campus Summary
                </h3>

              </div>

              <div className="mt-8 space-y-6">

                <div className="flex items-center justify-between">
                  <span className="text-muted">Departments</span>
                  <span className="font-bold">82</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted">Research Centers</span>
                  <span className="font-bold">27</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted">Ongoing Projects</span>
                  <span className="font-bold">4,812</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted">External Grants</span>
                  <span className="font-bold">$482M</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CampusResearchHub;