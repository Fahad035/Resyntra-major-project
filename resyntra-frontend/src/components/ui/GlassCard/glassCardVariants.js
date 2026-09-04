// src/components/ui/GlassCard/glassCardVariants.js

export const glassCardVariants = {
  base:
    "relative overflow-hidden rounded-3xl border transition-all duration-500 backdrop-blur-xl",

  variants: {
    default:
      "bg-white/5 border-white/10 hover:border-cyan-400/30",

    dark:
      "bg-slate-900/60 border-slate-700 hover:border-cyan-500/40",

    gradient:
      "bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/10",

    ai:
      "bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border-cyan-500/20 hover:border-cyan-400/40",
  },

  padding: {
    none: "",

    sm: "p-4",

    md: "p-6",

    lg: "p-8",

    xl: "p-10",
  },
};