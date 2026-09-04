const HeroHeading = () => {
    return (
        <>
            <h1 className="max-w-5xl text-center text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-7xl">
                Accelerate Research with
                <br />
                <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                    AI That Understands Papers
                </span>
            </h1>

            <p className="mt-8 max-w-3xl text-center text-lg leading-8 text-slate-400 lg:text-xl">
                Upload research papers, generate structured summaries, discover research gaps,
                compare findings, chat with documents, and build knowledge faster using a
                modern AI-powered research workspace.
            </p>
        </>
    );
};

export default HeroHeading;