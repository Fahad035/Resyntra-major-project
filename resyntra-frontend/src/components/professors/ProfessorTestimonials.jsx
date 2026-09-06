import { motion } from "framer-motion";
import {
  Quote,
  GraduationCap,
  Building2,
  BookOpen,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Professor of Computer Science",
    university: "Northbridge University",
    quote:
      "Resyntra has significantly reduced the time I spend preparing lectures and supervising literature reviews. I now spend more time mentoring students instead of searching for papers.",
  },
  {
    name: "Prof. David Chen",
    role: "Department Chair",
    university: "Global Institute of Technology",
    quote:
      "The AI insights into faculty publications and student research have transformed how we monitor departmental progress and research impact.",
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Research Supervisor",
    university: "Metropolitan School of Engineering",
    quote:
      "Our graduate students discover stronger research gaps and produce higher-quality drafts much earlier in their projects using Resyntra.",
  },
];

const stats = [
  {
    value: "5,000+",
    label: "Faculty Members",
    icon: GraduationCap,
  },
  {
    value: "320+",
    label: "Departments",
    icon: Building2,
  },
  {
    value: "1.8M+",
    label: "Research Papers",
    icon: BookOpen,
  },
];

const ProfessorTestimonials = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">

            Trusted by Faculty

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Helping professors teach,
            <br />

            mentor and publish better.

          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">

            Faculty members use Resyntra to simplify teaching,
            strengthen research supervision and improve academic impact.

          </p>

        </div>

        {/* Testimonials */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
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
                delay: index * .08,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-[34px] border border-border bg-background/70 p-8 backdrop-blur"
            >

              <Quote className="text-cyan-400" size={34} />

              <p className="mt-8 leading-8 text-muted">

                "{item.quote}"

              </p>

              <div className="mt-10">

                <h4 className="font-bold text-xl">

                  {item.name}

                </h4>

                <p className="mt-2 text-cyan-400">

                  {item.role}

                </p>

                <p className="mt-1 text-sm text-muted">

                  {item.university}

                </p>

              </div>

              <div className="mt-6 flex gap-1">

                {Array.from({ length: 5 }).map((_, i) => (

                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Trust Numbers */}

        <div className="mt-20 rounded-[36px] border border-border bg-linear-to-r from-cyan-500/10 via-background to-violet-500/10 p-10">

          <div className="grid gap-10 text-center md:grid-cols-3">

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <div key={item.label}>

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                    <Icon className="text-cyan-400" />

                  </div>

                  <h3 className="mt-6 text-5xl font-black">

                    {item.value}

                  </h3>

                  <p className="mt-3 text-muted">

                    {item.label}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProfessorTestimonials;