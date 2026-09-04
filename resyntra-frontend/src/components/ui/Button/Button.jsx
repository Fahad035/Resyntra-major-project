

import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Loader2 } from "lucide-react";

import { buttonVariants } from "./buttonVariants";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  type = "button",
  ...props
}) => {
  const classes = twMerge(
    clsx(
      buttonVariants.base,
      buttonVariants.variants[variant],
      buttonVariants.sizes[size],
      className
    )
  );

  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      type={type}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading...
        </>
      ) : (
        <>
          {leftIcon}

          <span>{children}</span>

          {rightIcon}
        </>
      )}
    </motion.button>
  );
};

export default Button;