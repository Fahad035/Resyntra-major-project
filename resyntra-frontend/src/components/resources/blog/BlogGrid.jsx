import {
  BarChart3,
  BrainCircuit,
  FileSearch,
  GraduationCap,
  Search,
  Sparkles,
} from "lucide-react";

import BlogCard from "./BlogCard";

const posts = [
  {
    title: "Semantic Search: Finding Papers by Meaning",
    description:
      "Explore how semantic search and modern information retrieval can help researchers discover relevant literature using concepts and context.",
    category: "Research",
    categoryId: "research",
    author: "Google Research",
    duration: "Research article",
    icon: Search,
    externalUrl:
      "https://research.google/blog/deeper-insights-into-retrieval-augmented-generation-the-role-of-sufficient-context/",
  },
  {
    title: "Understanding RAG for Research Assistants",
    description:
      "Learn how retrieval-augmented generation uses external context to improve the information available to AI systems.",
    category: "AI & ML",
    categoryId: "ai",
    author: "Google Research",
    duration: "Technical article",
    icon: BrainCircuit,
    externalUrl:
      "https://research.google/blog/deeper-insights-into-retrieval-augmented-generation-the-role-of-sufficient-context/",
  },
  {
    title: "Building a Better Literature Review Workflow",
    description:
      "Explore how AI can support literature reviews while researchers continue to validate sources and evidence.",
    category: "Academic",
    categoryId: "academic",
    author: "Nature",
    duration: "Research article",
    icon: FileSearch,
    externalUrl:
      "https://www.nature.com/articles/d41586-024-03676-9",
  },
  {
    title: "How Researchers Can Use AI More Effectively",
    description:
      "Explore how AI tools are increasingly being used across scientific research and the considerations that come with adoption.",
    category: "AI & ML",
    categoryId: "ai",
    author: "Nature",
    duration: "Research article",
    icon: Sparkles,
    externalUrl:
      "https://www.nature.com/articles/s41562-024-02020-5",
  },
  {
    title: "Turning Research Data into Useful Analytics",
    description:
      "Discover research on how AI adoption can influence scientific productivity, collaboration, and the direction of research.",
    category: "Product",
    categoryId: "product",
    author: "Nature",
    duration: "Research article",
    icon: BarChart3,
    externalUrl:
      "https://www.nature.com/articles/s41586-025-09922-y",
  },
  {
    title: "From Research Paper to Academic Presentation",
    description:
      "Explore how AI-assisted research workflows are expanding from literature discovery toward broader scientific processes.",
    category: "Academic",
    categoryId: "academic",
    author: "Nature",
    duration: "Research article",
    icon: GraduationCap,
    externalUrl:
      "https://www.nature.com/articles/s41586-026-10265-5",
  },
];

const BlogGrid = ({
  activeCategory = "all",
  searchQuery = "",
}) => {
  const query = searchQuery.trim().toLowerCase();

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" ||
      post.categoryId === activeCategory;

    const searchableText = [
      post.title,
      post.description,
      post.category,
      post.author,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !query || searchableText.includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="latest"
      className="bg-(--background)"
    >
      <div
        className="
          mx-auto max-w-7xl
          px-6 pb-20
          sm:px-8
          lg:px-10 lg:pb-24
        "
      >
        <div className="mb-10">
          <p
            className="
              text-xs font-semibold
              uppercase tracking-[0.18em]
              text-(--primary)
            "
          >
            Latest articles
          </p>

          <div
            className="
              mt-2 flex flex-wrap
              items-end justify-between gap-4
            "
          >
            <div>
              <h2
                className="
                  text-2xl font-semibold
                  tracking-tight
                  text-(--foreground)
                  sm:text-3xl
                "
              >
                Explore the latest research insights
              </h2>

              <p
                className="
                  mt-2 max-w-2xl
                  text-sm leading-6
                  text-(--muted-foreground)
                "
              >
                Practical perspectives on AI,
                academic research, and building
                a more efficient research workflow.
              </p>
            </div>

            <span
              className="
                text-xs
                text-(--muted-foreground)
              "
            >
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1
                ? "article"
                : "articles"}
            </span>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div
            className="
              grid gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.title}
                {...post}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              rounded-2xl
              border border-(--border)
              bg-(--surface)
              px-6 py-14
              text-center
            "
          >
            <div
              className="
                mx-auto flex h-12 w-12
                items-center justify-center
                rounded-xl
                bg-(--foreground)/5
                text-(--muted-foreground)
              "
            >
              <Search className="h-5 w-5" />
            </div>

            <h3
              className="
                mt-4 text-base font-semibold
                text-(--foreground)
              "
            >
              No matching articles
            </h3>

            <p
              className="
                mx-auto mt-2 max-w-md
                text-sm leading-6
                text-(--muted-foreground)
              "
            >
              Try another keyword or choose a
              different category to explore
              more research insights.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;