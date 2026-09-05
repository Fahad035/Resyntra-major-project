import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";

import useTheme from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, setTheme, THEMES } = useTheme();

  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () =>
      document.removeEventListener(
        "mousedown",
        handler
      );
  }, []);

  const options = [
    {
      value: THEMES.LIGHT,
      label: "Light",
      icon: Sun,
    },
    {
      value: THEMES.DARK,
      label: "Dark",
      icon: Moon,
    },
    {
      value: THEMES.SYSTEM,
      label: "System",
      icon: Monitor,
    },
  ];

  const active =
    options.find((item) => item.value === theme) ??
    options[2];

  const ActiveIcon = active.icon;

  return (
    <div
      ref={ref}
      className="relative"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-(--foreground)/5 transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <ActiveIcon className="h-5 w-5" />
      </button>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 10,
            }}
            transition={{
              duration: 0.18,
            }}
            className="absolute right-0 mt-3 w-44 rounded-2xl border border-border bg-surface p-2 shadow-2xl"
          >
            {options.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.value}
                  onClick={() => {
                    setTheme(item.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                    theme === item.value
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-muted hover:bg-(--foreground)/5"
                  }`}
                >
                  <Icon className="h-4 w-4" />

                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;