const AuthCard = ({ children }) => {
  return (
    <div className="w-full rounded-3xl border border-border bg-surface p-8 shadow-(--shadow) sm:p-10">
      {children}
    </div>
  );
};

export default AuthCard;