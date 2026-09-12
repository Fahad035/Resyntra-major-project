import { Link } from "react-router-dom";

const AuthFooter = ({ text, linkText, to }) => {
  return (
    <div className="mt-8 text-center text-sm text-muted">
      {text}{" "}
      <Link
        to={to}
        className="font-semibold text-(--primary) hover:text-(--primary-hover)"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default AuthFooter;