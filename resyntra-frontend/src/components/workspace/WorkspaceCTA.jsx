import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WorkspaceCTA = () => {
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
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-border
            bg-card
            px-8
            py-20
            lg:px-20
          "
        >
          {/* Background Glow */}

          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-1
                text-sm
                font-medium
                text-cyan-400
              "
            >
              Ready to Get Started?
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight text-foreground lg:text-6xl">
              Your next research breakthrough starts here.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
              Replace scattered PDFs, notes, bookmarks, and documents with one
              intelligent AI-powered workspace built for modern researchers.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                to="/register"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-cyan-500
                  px-7
                  py-4
                  font-semibold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Start Free

                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/pricing"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-border
                  px-7
                  py-4
                  font-medium
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:text-cyan-400
                "
              >
                <PlayCircle className="h-5 w-5" />

                View Pricing
              </Link>
            </div>

            {/* Stats */}

            <div className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  100K+
                </h3>

                <p className="mt-2 text-muted">
                  Research papers organized
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  50K+
                </h3>

                <p className="mt-2 text-muted">
                  Researchers using Resyntra
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  98%
                </h3>

                <p className="mt-2 text-muted">
                  AI answer accuracy
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkspaceCTA;