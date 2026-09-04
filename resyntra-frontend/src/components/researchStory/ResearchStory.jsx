import { motion } from "framer-motion";
import storyData from "./storyData";

const ResearchStory = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6 ">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Research Problems We Solve
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Research shouldn't feel
            <br />
            like searching for needles
            <br />
            in a haystack.
          </h2>
        </motion.div>

        {/* Story */}

        <div className="space-y-20">

          {storyData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="grid gap-6 md:grid-cols-12"
            >
              <div className="md:col-span-5">
                <h3 className="text-2xl font-semibold leading-snug text-white">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-7">
                <p className="text-lg leading-8 text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ResearchStory;