import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialItem = ({ name, role, quote }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border pt-8"
    >
      <Quote className="mb-6 h-8 w-8 text-cyan-400/70" />

      <p className="text-lg leading-8 text-muted">
        "{quote}"
      </p>

      <div className="mt-8">
        <h4 className="font-semibold text-foreground">
          {name}
        </h4>

        <p className="mt-1 text-sm text-muted">
          {role}
        </p>
      </div>
    </motion.article>
  );
};

export default TestimonialItem;