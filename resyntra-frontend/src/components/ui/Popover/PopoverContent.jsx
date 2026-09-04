// src/components/ui/Popover/PopoverContent.jsx

import { AnimatePresence, motion } from "framer-motion";
import { usePopover } from "./Popover";

const PopoverContent = ({
  children,
  className = "",
}) => {
  const { open, setOpen } = usePopover();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 8,
          }}
          transition={{
            duration: 0.18,
          }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className={`
            absolute
            left-1/2
            top-full
            mt-4
            -translate-x-1/2
            rounded-2xl
            border
            border-white/10
            bg-slate-900/90
            backdrop-blur-xl
            shadow-xl
            ${className}
          `}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopoverContent;