import { Link } from "react-router-dom";

const AuthFooter = ({
  text,
  linkText,
  to,
}) => {
  return (
    <div className="mt-8 text-center text-sm text-slate-600">
      {text}{" "}

      <Link
        to={to}
        className="font-semibold text-blue-600 hover:text-blue-700"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default AuthFooter;