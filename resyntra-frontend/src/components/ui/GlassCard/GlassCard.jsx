// src/components/ui/GlassCard/GlassCard.jsx

import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { glassCardVariants } from "./glassCardVariants";

const GlassCard = ({
  children,
  variant = "default",
  padding = "md",
  className,
  hover = true,
  ...props
}) => {
  const classes = twMerge(
    clsx(
      glassCardVariants.base,
      glassCardVariants.variants[variant],
      glassCardVariants.padding[padding],
      className
    )
  );

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.02,
            }
          : {}
      }
      transition={{
        duration: 0.25,
      }}
      className={classes}
      {...props}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;