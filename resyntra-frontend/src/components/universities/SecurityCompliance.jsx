import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Database,
  Users,
  FileCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const security = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "End-to-end encryption, secure infrastructure and continuous monitoring.",
  },
  {
    icon: KeyRound,
    title: "Single Sign-On",
    description:
      "Integrate with institutional identity providers and campus authentication.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description:
      "Granular permissions for administrators, faculty, researchers and students.",
  },
  {
    icon: Database,
    title: "Research Data Protection",
    description:
      "Protect institutional repositories and sensitive research assets.",
  },
];

const compliance = [
  "FERPA Ready",
  "GDPR Support",
  "Audit Logs",
  "Institutional Backups",
  "Encrypted Storage",
  "API Access Control",
];

const SecurityCompliance = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Enterprise Security
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Built for institutional
            trust.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Protect research data, institutional knowledge and academic
            collaboration with enterprise-grade security and governance.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">

          {/* Left */}

          <div className="grid gap-6 sm:grid-cols-2">

            {security.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-[30px] border border-border bg-background/70 p-7 backdrop-blur"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                    <Icon className="text-cyan-400" />

                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted">
                    {item.description}
                  </p>

                </motion.div>

              );

            })}

          </div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[36px] border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-violet-500/10 p-8"
          >

            <div className="flex items-center gap-3">

              <Lock className="text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Security Overview
              </h3>

            </div>

            <div className="mt-8 space-y-4">

              {compliance.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4"
                >

                  <CheckCircle2
                    className="text-emerald-400"
                    size={20}
                  />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-background/60 p-6">

              <div className="flex items-center gap-3">

                <Sparkles className="text-cyan-400" />

                <h4 className="font-bold">
                  AI Governance
                </h4>

              </div>

              <p className="mt-4 leading-8 text-muted">
                Resyntra provides transparent AI-assisted research workflows,
                institutional oversight, permission management and auditability
                to help universities manage AI responsibly.
              </p>

            </div>

            <div className="mt-8 rounded-2xl bg-cyan-500 p-6 text-slate-950">

              <FileCheck size={30} />

              <h4 className="mt-4 text-xl font-black">
                Enterprise Ready
              </h4>

              <p className="mt-3 leading-7 opacity-80">
                Designed for universities, research institutions and
                enterprise academic environments.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default SecurityCompliance;