import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 flex">
      {/* Left Section */}
      <div className="hidden lg:flex flex-1 flex-col justify-between p-16 text-white">
        <div>
          <Link to="/" className="text-3xl font-bold tracking-wide">
            Resyntra
          </Link>

          <p className="mt-3 text-slate-300 max-w-md">
            AI-powered research assistant for discovering papers,
            generating literature reviews, research gaps, citations,
            summaries, and presentations.
          </p>
        </div>

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Empower Your
            <br />
            Research Journey.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-lg">
            Organize papers, chat with research documents using AI,
            generate PPTs, literature reviews, and discover research
            opportunities effortlessly.
          </p>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Resyntra. All rights reserved.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;