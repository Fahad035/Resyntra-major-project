const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>

      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
    </div>
  );
};

export default AuthHeader;