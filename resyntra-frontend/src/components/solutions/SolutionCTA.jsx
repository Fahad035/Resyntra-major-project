import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const students = [
  {
    name: "Aarav Sharma",
    role: "Computer Science Student",
    university: "IIT Delhi",
  },
  {
    name: "Emily Carter",
    role: "PhD Research Scholar",
    university: "University of Oxford",
  },
  {
    name: "Mohammed Ali",
    role: "Masters Student",
    university: "King Saud University",
  },
  {
    name: "Sophia Williams",
    role: "Biomedical Student",
    university: "University of Toronto",
  },
  {
    name: "Liam Anderson",
    role: "AI Research Student",
    university: "Stanford University",
  },
];

const SolutionCTA = () => {
  return (
    <section className="pb-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="overflow-hidden rounded-[40px] border border-border bg-linear-to-br from-cyan-500/10 via-background to-violet-500/10">

          {/* Trusted */}

          <div className="border-b border-border px-10 py-12">

            <p className="text-center text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Trusted by Students Worldwide
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">

              {students.map((student, index) => (

                <motion.div
                  key={student.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-3xl border border-border bg-background/70 p-6 backdrop-blur"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-violet-500 text-lg font-bold text-white">

                      {student.name.charAt(0)}

                    </div>

                    <div>

                      <h4 className="font-semibold">
                        {student.name}
                      </h4>

                      <p className="text-sm text-muted">
                        {student.role}
                      </p>

                    </div>

                  </div>

                  <div className="mt-5 flex">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}

                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    "{student.university}"
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

          {/* CTA */}

          <div className="px-10 py-20 text-center">

            <h2 className="text-5xl font-black leading-tight">
              Ready to transform
              <br />
              your research workflow?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
              Join thousands of students who already use Resyntra to
              summarize papers, discover insights, chat with research,
              and finish literature reviews faster.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105"
              >
                Start Free

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/platform/workspace"
                className="inline-flex items-center rounded-2xl border border-border px-8 py-4 font-semibold transition hover:border-cyan-500"
              >
                Explore Platform
              </Link>

            </div>

            <p className="mt-8 text-sm text-muted">
              No credit card required • Free forever plan available
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SolutionCTA;