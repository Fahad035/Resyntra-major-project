
export const buttonVariants = {
  base:
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 disabled:pointer-events-none",

  variants: {
    primary:
      "bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 text-white shadow-lg hover:shadow-cyan-500/30",

    secondary:
      "bg-slate-800 border border-slate-700 text-white hover:bg-slate-700",

    outline:
      "border border-slate-600 text-white hover:bg-slate-800",

    ghost:
      "text-slate-300 hover:bg-slate-800",

    danger:
      "bg-red-600 text-white hover:bg-red-700",

    ai:
      "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-purple-500/30",
  },

  sizes: {
    sm: "px-3 py-2 text-sm",

    md: "px-5 py-3 text-base",

    lg: "px-7 py-4 text-lg",

    xl: "px-9 py-5 text-xl",
  },
};