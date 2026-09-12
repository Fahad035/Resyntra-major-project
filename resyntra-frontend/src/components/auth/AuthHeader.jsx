const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>

      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-muted">{subtitle}</p>
      )}
    </div>
  );
};

export default AuthHeader;