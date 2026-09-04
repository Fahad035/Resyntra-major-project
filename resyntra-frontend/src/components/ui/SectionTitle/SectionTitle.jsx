// src/components/ui/SectionTitle/SectionTitle.jsx

import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({
  badge,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
  children,
}) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={twMerge(
        clsx(
          "flex flex-col gap-4 max-w-4xl",
          alignment[align],
          className
        )
      )}
    >
      {badge && (
        <div>
          {badge}
        </div>
      )}

      <h2
        className={twMerge(
          clsx(
            "text-4xl md:text-5xl font-bold leading-tight tracking-tight",
            titleClassName
          )
        )}
      >
        {title}
      </h2>

      <p
        className={twMerge(
          clsx(
            "text-slate-400 text-lg leading-8 max-w-3xl",
            descriptionClassName
          )
        )}
      >
        {description}
      </p>

      {children}
    </motion.div>
  );
};

export default SectionTitle;