const ResyntraLogo = ({ className = "h-10 w-10" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient id="resyntraGradient" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>

      {/* Outer Rounded Square */}
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="16"
        fill="url(#resyntraGradient)"
      />

      {/* Stylized R */}
      <path
        d="M23 18V46"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M23 18H35C40 18 43 21 43 26C43 31 40 34 35 34H23"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M33 34L44 46"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ResyntraLogo;