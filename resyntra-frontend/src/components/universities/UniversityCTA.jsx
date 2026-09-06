import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  ArrowRight,
  Users,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  "Institution-wide deployment",
  "Faculty & student onboarding",
  "Dedicated implementation support",
  "Enterprise security & compliance",
];

const UniversityCTA = () => {
  return (
    <section className="pb-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden rounded-[42px] border border-border bg-linear-to-br from-cyan-500/10 via-background to-violet-500/10"
        >

          {/* Background */}

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

          <div className="relative grid gap-16 p-12 lg:grid-cols-[1fr_.85fr] lg:p-16">

            {/* Left */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">

                <Building2 size={18} />

                Enterprise for Higher Education

              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">

                Transform your
                <br />

                university's
                <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">

                  {" "}research ecosystem

                </span>

              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">

                Empower faculty, researchers and students with one
                AI-powered platform for literature discovery,
                collaboration, publication analytics and institutional
                research intelligence.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105">

                  <CalendarDays size={20} />

                  Schedule a Demo

                </button>

                <button className="inline-flex items-center gap-3 rounded-2xl border border-border px-8 py-4 transition hover:border-cyan-500">

                  Contact Sales

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-[34px] border border-border bg-background/70 p-8 backdrop-blur">

              <div className="flex items-center gap-3">

                <GraduationCap className="text-cyan-400" />

                <h3 className="text-2xl font-bold">

                  Why Universities Choose Resyntra

                </h3>

              </div>

              <div className="mt-8 space-y-5">

                {benefits.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-border p-5"
                  >

                    <CheckCircle2
                      className="text-emerald-400"
                      size={20}
                    />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

              <div className="mt-10 rounded-2xl bg-linear-to-r from-cyan-500/10 to-violet-500/10 p-6">

                <div className="flex items-center gap-4">

                  <Users className="text-cyan-400" />

                  <div>

                    <h4 className="font-bold">
                      Personalized Implementation
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      Work with our higher education specialists to
                      deploy Resyntra across your institution with
                      onboarding, training and dedicated support.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default UniversityCTA;