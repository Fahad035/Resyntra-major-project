import clsx from "clsx";

const Container = ({
  children,
  className,
  fluid = false,
}) => {
  return (
    <div
      className={clsx(
        "w-full mx-auto px-5 sm:px-6 lg:px-8",
        fluid ? "max-w-full" : "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;