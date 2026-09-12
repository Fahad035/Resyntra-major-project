import { ArrowRight } from "lucide-react";

const AuthButton = ({ children, loading = false, type = "submit" }) => {
  return (
    <button
      type={type}
      disabled={loading}
      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-(--primary) py-3 font-semibold text-slate-950 shadow-lg shadow-(--primary)/20 transition-all duration-300 hover:bg-(--primary-hover) hover:shadow-xl hover:shadow-(--primary)/30 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="opacity-25"
            />
            <path
              fill="currentColor"
              className="opacity-75"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          Please wait...
        </>
      ) : (
        <>
          {children}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
};

export default AuthButton;