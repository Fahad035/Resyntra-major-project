// src/components/ui/Badge/Badge.jsx

import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { badgeVariants } from "./badgeVariants";

const Badge = ({
  children,
  variant = "primary",
  className,
}) => {
  const classes = twMerge(
    clsx(
      badgeVariants.base,
      badgeVariants.variants[variant],
      className
    )
  );

  return <span className={classes}>{children}</span>;
};

export default Badge;