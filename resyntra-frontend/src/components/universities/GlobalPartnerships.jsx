import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  Handshake,
  Landmark,
  ArrowUpRight,
  Network,
  Sparkles,
} from "lucide-react";

const partners = [
  {
    name: "MIT",
    country: "United States",
    projects: "28 Joint Projects",
  },
  {
    name: "University of Oxford",
    country: "United Kingdom",
    projects: "19 Joint Projects",
  },
  {
    name: "National University of Singapore",
    country: "Singapore",
    projects: "22 Joint Projects",
  },
  {
    name: "ETH Zurich",
    country: "Switzerland",
    projects: "16 Joint Projects",
  },
];

const networks = [
  {
    title: "International Universities",
    value: "180+",
    icon: Globe,
  },
  {
    title: "Research Institutes",
    value: "320+",
    icon: Building2,
  },
  {
    title: "Industry Partners",
    value: "95+",
    icon: Handshake,
  },
  {
    title: "Funding Agencies",
    value: "48",
    icon: Landmark,
  },
];

const GlobalPartnerships = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Global Partnerships
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Expand research
            <br />
            beyond your campus.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Connect researchers, institutions and industry partners through
            AI-powered collaboration intelligence and global research
            discovery.
          </p>

        </div>

        {/* Network Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {networks.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-[30px] border border-border bg-background/70 p-7 backdrop-blur"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon className="text-cyan-400" />

                </div>

                <h3 className="mt-6 text-4xl font-black">
                  {item.value}
                </h3>

                <p className="mt-2 text-muted">
                  {item.title}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Collaboration Layout */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_.9fr]">

          {/* Partner Universities */}

          <div className="rounded-[34px] border border-border bg-background/70 p-8">

            <div className="flex items-center gap-3">

              <Network className="text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Active Research Collaborations
              </h3>

            </div>

            <div className="mt-8 space-y-5">

              {partners.map((partner) => (

                <motion.div
                  key={partner.name}
                  whileHover={{
                    x: 6,
                  }}
                  className="flex items-center justify-between rounded-2xl border border-border p-5"
                >

                  <div>

                    <h4 className="font-semibold">
                      {partner.name}
                    </h4>

                    <p className="mt-1 text-sm text-muted">
                      {partner.country}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="font-medium text-cyan-400">
                      {partner.projects}
                    </p>

                    <ArrowUpRight
                      className="ml-auto mt-2 text-muted"
                      size={18}
                    />

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* AI Insight */}

          <div className="rounded-[34px] border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-violet-500/10 p-8">

            <div className="flex items-center gap-3">

              <Sparkles className="text-cyan-400" />

              <h3 className="text-2xl font-bold">
                AI Partnership Recommendations
              </h3>

            </div>

            <div className="mt-8 space-y-5">

              {[
                "Quantum Computing with ETH Zurich",
                "Medical AI with Stanford University",
                "Climate Research with NUS",
                "Robotics with MIT",
                "Biomedical Engineering with Oxford",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl border border-border bg-background/60 p-5"
                >

                  <p className="font-medium">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <div className="mt-8 rounded-2xl bg-background/60 p-6">

              <h4 className="font-semibold">
                AI Prediction
              </h4>

              <p className="mt-4 leading-8 text-muted">
                Expanding international collaborations by 20% could increase
                publication visibility, grant opportunities and citation
                impact over the next three years.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default GlobalPartnerships;