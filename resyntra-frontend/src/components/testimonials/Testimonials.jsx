import { motion } from "framer-motion";

import testimonialData from "./testimonialData";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Built for researchers,
            <br />
            trusted by researchers.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            From graduate students to experienced researchers,
            Resyntra helps people spend less time searching
            and more time discovering.
          </p>

        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">

          {testimonialData.map((item) => (
            <TestimonialItem
              key={item.name}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;