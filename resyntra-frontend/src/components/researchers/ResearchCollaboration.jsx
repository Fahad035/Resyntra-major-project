import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Building2,
  GitBranch,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const collaborators = [
  {
    name: "Stanford AI Lab",
    country: "USA",
    projects: 24,
    color: "from-cyan-500 to-sky-500",
    x: "50%",
    y: "12%",
  },
  {
    name: "Oxford University",
    country: "UK",
    projects: 18,
    color: "from-violet-500 to-fuchsia-500",
    x: "20%",
    y: "36%",
  },
  {
    name: "ETH Zurich",
    country: "Switzerland",
    projects: 14,
    color: "from-emerald-500 to-teal-500",
    x: "78%",
    y: "35%",
  },
  {
    name: "National University",
    country: "Singapore",
    projects: 20,
    color: "from-orange-500 to-yellow-500",
    x: "28%",
    y: "72%",
  },
  {
    name: "University of Tokyo",
    country: "Japan",
    projects: 17,
    color: "from-pink-500 to-rose-500",
    x: "72%",
    y: "72%",
  },
];

const stats = [
  {
    icon: Users,
    value: "18,400+",
    label: "Researchers",
  },
  {
    icon: Building2,
    value: "540+",
    label: "Institutions",
  },
  {
    icon: GitBranch,
    value: "92K+",
    label: "Collaborations",
  },
];

const ResearchCollaboration = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Global Collaboration
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Connect with researchers
            <br />
            around the world.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Discover collaborators, institutions and interdisciplinary
            opportunities through Resyntra's intelligent research network.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.15fr_.85fr]">

          {/* Network */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-162.5 overflow-hidden rounded-[36px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5"
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_70%)]" />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line x1="50" y1="15" x2="20" y2="38" stroke="#22d3ee" strokeOpacity=".2"/>
              <line x1="50" y1="15" x2="78" y2="38" stroke="#22d3ee" strokeOpacity=".2"/>
              <line x1="50" y1="15" x2="28" y2="74" stroke="#22d3ee" strokeOpacity=".2"/>
              <line x1="50" y1="15" x2="72" y2="74" stroke="#22d3ee" strokeOpacity=".2"/>
              <line x1="20" y1="38" x2="78" y2="38" stroke="#8b5cf6" strokeOpacity=".15"/>
              <line x1="28" y1="74" x2="72" y2="74" stroke="#10b981" strokeOpacity=".15"/>
            </svg>

            {collaborators.map((item, index) => (

              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  scale: .5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * .1,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                style={{
                  left: item.x,
                  top: item.y,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >

                <div className="flex flex-col items-center">

                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br ${item.color}`}
                  >
                    <Building2 className="text-white" />
                  </div>

                  <div className="mt-4 w-52 rounded-2xl border border-border bg-background/80 p-4 text-center backdrop-blur">

                    <h4 className="font-semibold">
                      {item.name}
                    </h4>

                    <p className="mt-1 text-sm text-muted">
                      {item.country}
                    </p>

                    <div className="mt-3 rounded-full bg-cyan-500/10 py-2 text-sm font-medium text-cyan-400">
                      {item.projects} Active Projects
                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-violet-500"
            >
              <Globe className="h-12 w-12 text-white"/>
            </motion.div>

          </motion.div>

          {/* Stats */}

          <div className="space-y-6">

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-3xl border border-border bg-background/70 p-8"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-violet-500">

                      <Icon className="text-white"/>

                    </div>

                    <ArrowRight className="text-muted"/>

                  </div>

                  <h3 className="mt-8 text-5xl font-black">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-muted">
                    {item.label}
                  </p>

                </motion.div>

              );

            })}

            <div className="rounded-3xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-violet-500/10 p-8">

              <div className="flex items-center gap-3">

                <Sparkles className="text-cyan-400"/>

                <h3 className="text-xl font-bold">
                  AI Matchmaking
                </h3>

              </div>

              <p className="mt-6 leading-8 text-muted">
                Based on your publications, Resyntra identified
                <span className="font-semibold text-cyan-400"> 42 researchers </span>
                working on complementary topics who could become valuable
                collaborators.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ResearchCollaboration;