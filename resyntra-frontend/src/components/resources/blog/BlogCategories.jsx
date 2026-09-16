import {
  BookOpen,
  BrainCircuit,
  Code2,
  GraduationCap,
  Search,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    id: "all",
    label: "All articles",
    icon: BookOpen,
  },
  {
    id: "research",
    label: "Research",
    icon: Search,
  },
  {
    id: "ai",
    label: "AI & ML",
    icon: BrainCircuit,
  },
  {
    id: "academic",
    label: "Academic",
    icon: GraduationCap,
  },
  {
    id: "product",
    label: "Product",
    icon: Sparkles,
  },
  {
    id: "developer",
    label: "Developer",
    icon: Code2,
  },
];

const BlogCategories = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <section className="border-b border-(--border) bg-(--surface)">
      <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive =
              activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  onCategoryChange(category.id)
                }
                className={`
                  inline-flex items-center gap-2
                  rounded-lg border px-3.5 py-2
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "border-(--foreground)/10 bg-(--foreground)/5 text-(--foreground)"
                      : "border-transparent text-(--muted-foreground) hover:border-(--border) hover:bg-(--background) hover:text-(--foreground)"
                  }
                `}
              >
                <Icon
                  className={`
                    h-4 w-4
                    ${
                      isActive
                        ? "text-(--primary)"
                        : "text-(--muted-foreground)"
                    }
                  `}
                />

                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;