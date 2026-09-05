import { motion } from "framer-motion";

import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground md:text-6xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted">
            Everything you need to know before getting started with Resyntra.
          </p>

        </motion.div>

        <div>

          {faqData.map((item) => (
            <FAQItem
              key={item.question}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;