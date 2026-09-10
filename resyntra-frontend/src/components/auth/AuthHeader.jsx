import { Link } from "react-router-dom";

const AuthHeader = ({
  title,
  subtitle,
  linkText,
  linkTo,
}) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-slate-500">
        {subtitle}
      </p>

      {linkText && (
        <Link
          to={linkTo}
          className="mt-3 inline-block text-blue-600 font-semibold hover:text-blue-700"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default AuthHeader;