import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const WorkflowCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
      }}
      className="
        flex
        items-start
        gap-4
        rounded-2xl
        border
        border-border
        bg-(--foreground)/3
        p-5
      "
    >
      <CheckCircle2 className="mt-1 h-6 w-6 text-cyan-400" />

      <div>
        <h4 className="font-semibold text-foreground">
          {item.title}
        </h4>

        <p className="mt-1 text-sm text-muted">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkflowCard;