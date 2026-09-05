import { motion } from "framer-motion";
import ResyntraLogo from "@/assets/logo/ResyntraLogo";

const Logo = () => {
  return (
    <motion.a
      href="/"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3"
    >
      <ResyntraLogo className="h-11 w-11" />

      <div>
        <h1 className="text-xl font-bold tracking-tight text-foreground">
          Resyntra
        </h1>

        <p className="text-xs text-muted">
          AI Research Intelligence
        </p>
      </div>
    </motion.a>
  );
};

export default Logo;