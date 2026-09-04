const HeroBackground = () => {
  return (
    <>
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
          absolute
          left-55
          top-40
          h-130
          w-130
          rounded-full
          bg-cyan-500/10
          blur-[140px]
          "
        />

        <div
          className="
          absolute
          -right-45
          top-40
          h-105
          w-105
          rounded-full
          bg-indigo-500/10
          blur-[120px]
          "
        />

      </div>

      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [bg-size:48px_48px]
        "
      />
    </>
  );
};

export default HeroBackground;