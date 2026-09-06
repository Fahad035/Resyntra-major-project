import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  BrainCircuit,
  Users,
  BookOpen,
  Quote,
  Globe,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "540+",
    label: "Universities",
  },
  {
    icon: Users,
    value: "18K+",
    label: "Researchers",
  },
  {
    icon: BookOpen,
    value: "250M+",
    label: "Research Papers",
  },
  {
    icon: Quote,
    value: "3.8B+",
    label: "Citation Links",
  },
];

const activity = [
  "Computer Science +24%",
  "Medicine +18%",
  "Engineering +31%",
  "Physics +14%",
];

const UniversityHero = () => {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5" />

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-violet-500/10 blur-[160px]" />

      <div className="relative mx-auto grid w-[92%] max-w-7xl items-center gap-20 lg:grid-cols-[1.05fr_.95fr]">

        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .7,
          }}
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">

            <GraduationCap size={18} />

            AI Research Platform for Universities

          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

            Power your
            <br />

            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">

              entire institution

            </span>

            <br />

            with AI.

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">

            Unify research, publications, faculty,
            students, citations and institutional
            analytics into one intelligent platform
            designed for modern universities.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105">

              Schedule Demo

              <ArrowRight size={18} />

            </button>

            <button className="rounded-2xl border border-border px-8 py-4 transition hover:border-cyan-500">

              Explore Platform

            </button>

          </div>

          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-background/60 p-5 backdrop-blur"
                >

                  <Icon className="text-cyan-400" />

                  <h3 className="mt-4 text-3xl font-black">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-muted">
                    {item.label}
                  </p>

                </div>

              );

            })}

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: .2,
          }}
        >

          <div className="overflow-hidden rounded-[34px] border border-border bg-background/70 shadow-2xl backdrop-blur">

            {/* Top */}

            <div className="flex items-center justify-between border-b border-border p-6">

              <div>

                <h3 className="text-xl font-bold">
                  Institutional Dashboard
                </h3>

                <p className="mt-1 text-sm text-muted">
                  Live University Overview
                </p>

              </div>

              <div className="rounded-xl bg-cyan-500/10 p-3">

                <BrainCircuit className="text-cyan-400" />

              </div>

            </div>

            {/* KPI */}

            <div className="grid grid-cols-2 gap-4 p-6">

              <div className="rounded-2xl bg-linear-to-br from-cyan-500/10 to-cyan-500/5 p-5">

                <Users className="text-cyan-400" />

                <h4 className="mt-4 text-3xl font-black">
                  18,420
                </h4>

                <p className="mt-2 text-sm text-muted">
                  Researchers
                </p>

              </div>

              <div className="rounded-2xl bg-linear-to-br from-violet-500/10 to-violet-500/5 p-5">

                <BookOpen className="text-violet-400" />

                <h4 className="mt-4 text-3xl font-black">
                  124K
                </h4>

                <p className="mt-2 text-sm text-muted">
                  Publications
                </p>

              </div>

            </div>

            {/* Departments */}

            <div className="border-t border-border p-6">

              <div className="flex items-center justify-between">

                <h4 className="font-semibold">
                  Department Growth
                </h4>

                <Globe className="text-cyan-400" />

              </div>

              <div className="mt-6 space-y-4">

                {activity.map((item) => (

                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-border p-4"
                  >

                    <span>{item.split("+")[0]}</span>

                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                      +{item.split("+")[1]}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Footer */}

            <div className="border-t border-border bg-linear-to-r from-cyan-500/10 to-violet-500/10 p-6">

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-emerald-500/10 p-3">

                  <ShieldCheck className="text-emerald-400" />

                </div>

                <div>

                  <h4 className="font-semibold">
                    AI Recommendation
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    Cross-department collaboration between Computer
                    Science and Medicine could increase institutional
                    research output by an estimated 21%.
                  </p>

                </div>

              </div>

            </div>

          </div>

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-background/80 p-5 backdrop-blur lg:block"
          >

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-emerald-400" />

              <div>

                <h4 className="font-semibold">
                  AI Monitoring
                </h4>

                <p className="text-sm text-muted">
                  82 Departments Connected
                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default UniversityHero;