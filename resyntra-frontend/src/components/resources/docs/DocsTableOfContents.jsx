import { Link } from "react-router-dom";

const sections = [
  {
    title: "Overview",
    id: "overview",
  },
  {
    title: "What is Resyntra?",
    id: "what-is-resyntra",
  },
  {
    title: "Getting started",
    id: "getting-started",
  },
  {
    title: "Research workflow",
    id: "research-workflow",
  },
  {
    title: "AI-powered research",
    id: "ai-powered-research",
  },
  {
    title: "Next steps",
    id: "next-steps",
  },
];

const DocsTableOfContents = () => {
  return (
    <aside className="hidden w-52 shrink-0 xl:block">
      <div className="w-full">
        <p className="mb-4 text-xs font-semibold text-(--foreground)">
          On this page
        </p>

        <nav className="border-l border-(--border)">
          <div className="space-y-0.5">
            {sections.map((section, index) => (
              <Link
                key={section.id}
                to={`#${section.id}`}
                className={`
                  group
                  relative
                  block
                  border-l
                  py-1.5
                  pl-4
                  text-xs
                  leading-5
                  transition-colors
                  duration-150
                  ${
                    index === 0
                      ? "-ml-px border-(--primary) font-medium text-(--foreground)"
                      : "-ml-px border-transparent text-(--muted-foreground) hover:border-(--primary)/40 hover:text-(--foreground)"
                  }
                `}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default DocsTableOfContents;