const AuthLayout = ({
  title,
  children,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-6">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;