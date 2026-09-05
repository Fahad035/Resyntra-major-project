import { motion } from "framer-motion";
import clsx from "clsx";

const PageLayout = ({
  children,
  className = "",
}) => {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={clsx(
        "min-h-screen bg-background text-foreground transition-colors duration-300",
        className
      )}
    >
      <div className="pt-28 lg:pt-32">
        {children}
      </div>
    </motion.main>
  );
};

export default PageLayout;