const AuthButton = ({
  children,
  loading = false,
  type = "submit",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
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

          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default AuthButton;