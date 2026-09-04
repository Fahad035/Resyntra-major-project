import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-6">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-xl font-medium text-white">
          {question}
        </h3>

        {open ? (
          <Minus className="h-5 w-5 text-cyan-400" />
        ) : (
          <Plus className="h-5 w-5 text-slate-400" />
        )}
      </button>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pt-5 max-w-3xl text-lg leading-8 text-slate-400">
              {answer}
            </p>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
};

export default FAQItem;