import {
  GraduationCap,
  Microscope,
  BookOpen,
  BrainCircuit,
} from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Students",
    subtitle: "Learn Faster",
  },
  {
    icon: Microscope,
    title: "Researchers",
    subtitle: "Discover Insights",
  },
  {
    icon: BookOpen,
    title: "Educators",
    subtitle: "Teach Better",
  },
  {
    icon: BrainCircuit,
    title: "AI Powered",
    subtitle: "Research Assistant",
  },
];

const TrustedSection = () => {
  return (
    <section className="mt-24 w-full max-w-6xl">
      <p className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-muted">
        Built for Modern Research
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-(--foreground)/3 p-6 text-center transition hover:border-cyan-400/30 hover:bg-(--foreground)/5"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
              <Icon className="h-7 w-7 text-cyan-400" />
            </div>

            <h3 className="font-semibold text-foreground">
              {title}
            </h3>

            <p className="mt-2 text-sm text-muted">
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedSection;