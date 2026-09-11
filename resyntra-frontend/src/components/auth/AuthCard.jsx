const AuthCard = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-surface p-8 shadow-theme sm:p-10">
      {children}
    </div>
  );
};

export default AuthCard;