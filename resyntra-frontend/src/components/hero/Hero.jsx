import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroSearch from "./HeroSearch";
import SuggestionChips from "./SuggestionChips";
import WorkspacePreview from "./WorkspacePreview";
import TrustedSection from "./TrustedSection";
import HeroStats from "./HeroStats";

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-30 lg:pt-30 pb-20">
            <HeroBackground />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

                <HeroBadge />

                <HeroHeading />

                <HeroSearch />

                <SuggestionChips />

                <WorkspacePreview />

                <TrustedSection />

                <HeroStats />

            </div>
        </section>
    );
};

export default Hero;