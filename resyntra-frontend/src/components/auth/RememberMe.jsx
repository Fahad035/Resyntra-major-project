import { Link } from "react-router-dom";

const RememberMe = ({ register }) => {
  return (
    <div className="flex items-center justify-between">
      <label className="flex cursor-pointer items-center gap-2 text-sm text-muted">
        <input
          type="checkbox"
          {...register("remember")}
          className="h-4 w-4 rounded border-border text-(--primary) focus:ring-(--primary)"
        />
        Remember me
      </label>

      <Link
        to="/forgot-password"
        className="text-sm font-medium text-(--primary) hover:text-(--primary-hover)"
      >
        Forgot Password?
      </Link>
    </div>
  );
};

export default RememberMe;