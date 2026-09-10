const RememberMe = ({
  register,
}) => {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
        <input
          type="checkbox"
          {...register("remember")}
          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />

        Remember me
      </label>

      <button
        type="button"
        className="text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        Forgot Password?
      </button>
    </div>
  );
};

export default RememberMe;