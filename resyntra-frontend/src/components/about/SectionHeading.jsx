import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mx-auto mb-14 max-w-2xl text-center"
  >
    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
      {eyebrow}
    </span>
    <h2 className="mt-6 text-3xl font-bold text-foreground md:text-5xl">{title}</h2>
    {description && (
      <p className="mt-6 text-lg leading-8 text-muted">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;