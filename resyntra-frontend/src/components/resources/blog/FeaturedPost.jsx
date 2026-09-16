import {
  ArrowUpRight,
  BrainCircuit,
  BarChart3,
  FileSearch,
  FlaskConical,
  Globe2,
  GraduationCap,
  Lightbulb,
  Network,
  Search,
  Sparkles,
} from "lucide-react";

const featuredPosts = [
  {
    category: "AI Research",
    title:
      "Synthesizing scientific literature with retrieval-augmented language models",
    description:
      "Explore how retrieval-augmented language models can support scientific literature synthesis.",
    author: "Nature",
    icon: BrainCircuit,
    externalUrl:
      "https://www.nature.com/articles/s41586-025-10072-4",
  },
  {
    category: "AI & ML",
    title:
      "Deeper insights into retrieval augmented generation",
    description:
      "Explore how sufficient context affects retrieval-augmented generation systems.",
    author: "Google Research",
    icon: Search,
    externalUrl:
      "https://research.google/blog/deeper-insights-into-retrieval-augmented-generation-the-role-of-sufficient-context/",
  },
  {
    category: "Literature Review",
    title:
      "Using Generative and Agentic AI in the Literature Review",
    description:
      "Learn how AI can complement traditional literature-search methods.",
    author: "Elsevier Researcher Academy",
    icon: FileSearch,
    externalUrl:
      "https://researcheracademy.elsevier.com/research-preparation/research-design/using-generative-agentic-ai-literature-review",
  },
  {
    category: "Scientific Research",
    title:
      "Exploring the role of large language models in the scientific method",
    description:
      "Discover how LLMs are being explored across different stages of scientific research.",
    author: "npj Artificial Intelligence",
    icon: FlaskConical,
    externalUrl:
      "https://www.nature.com/articles/s44387-025-00019-5",
  },
  {
    category: "Research Workflow",
    title:
      "The future of reviews writing in the AI era",
    description:
      "Explore how AI-assisted workflows are supporting literature search and review preparation.",
    author: "Nature Reviews Chemistry",
    icon: Lightbulb,
    externalUrl:
      "https://www.nature.com/articles/s41570-025-00738-y",
  },
  {
    category: "Research Discovery",
    title:
      "Reimagining biomedical science workflows in the age of large language models",
    description:
      "Discover how AI-enabled literature search and synthesis can support researchers.",
    author: "Nature",
    icon: Globe2,
    externalUrl:
      "https://www.nature.com/articles/s44400-026-00126-3",
  },
  {
    category: "Research & AI",
    title:
      "Rethinking Science in the Age of Artificial Intelligence",
    description:
      "Explore how AI is reshaping research workflows and scientific discovery.",
    author: "arXiv",
    icon: Sparkles,
    externalUrl:
      "https://arxiv.org/abs/2511.10524",
  },
  {
    category: "Knowledge Discovery",
    title:
      "From biomedical knowledge graph construction to semantic querying",
    description:
      "Explore semantic querying over complex biomedical research information.",
    author: "Scientific Reports",
    icon: Network,
    externalUrl:
      "https://www.nature.com/articles/s41598-025-93334-5",
  },
  {
    category: "Academic Research",
    title:
      "Human researchers and AI in systematic review writing",
    description:
      "A comparative study of human researchers and large language models in review writing.",
    author: "Scientific Reports",
    icon: GraduationCap,
    externalUrl:
      "https://www.nature.com/articles/s41598-025-28993-5",
  },
  {
    category: "Research Technology",
    title:
      "ScienceDirect AI and the future of research discovery",
    description:
      "Explore how generative AI can support research discovery and information synthesis.",
    author: "Elsevier",
    icon: BarChart3,
    externalUrl:
      "https://www.elsevier.com/about/press-releases/elsevier-launches-sciencedirect-ai-to-transform-research-with-rapid-mission",
  },
];

const FeaturedPostCard = ({ post }) => {
  const Icon = post.icon;

  return (
    <a
      href={post.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group block w-82.5 shrink-0
        sm:w-95
        lg:w-105
      "
    >
      <article
        className="
          h-full overflow-hidden rounded-2xl
          border border-(--border)
          bg-(--surface)
          transition-all duration-300
          hover:-translate-y-1
          hover:border-(--primary)/30
          hover:shadow-(--shadow)
        "
      >
        {/* Visual */}
        <div
          className="
            relative flex h-36
            items-center justify-center
            overflow-hidden
            border-b border-(--border)
            bg-(--surface-secondary)
          "
        >
          {/* Animated rings */}
          <div
            className="
              absolute h-28 w-28
              rounded-full
              border border-(--primary)/10
              transition-transform duration-700
              group-hover:scale-125
            "
          />

          <div
            className="
              absolute h-20 w-20
              rounded-full
              border border-(--primary)/15
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              relative flex h-12 w-12
              items-center justify-center
              rounded-xl
              border border-(--border)
              bg-(--surface)
              text-(--primary)
              shadow-lg
              transition-transform duration-300
              group-hover:scale-110
            "
          >
            <Icon className="h-5 w-5" />
          </div>

          {/* Source */}
          <span
            className="
              absolute bottom-4 left-4
              rounded-md
              border border-(--border)
              bg-(--surface)/80
              px-2.5 py-1
              text-[10px]
              text-(--muted-foreground)
              backdrop-blur-md
            "
          >
            {post.author}
          </span>

          <span
            className="
              absolute right-4 top-4
              flex h-7 w-7
              items-center justify-center
              rounded-md
              border border-(--border)
              bg-(--surface)/80
              text-(--muted-foreground)
              backdrop-blur-md
              transition-colors
              group-hover:text-(--primary)
            "
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <span
            className="
              inline-flex rounded-full
              border border-(--primary)/20
              bg-(--primary)/10
              px-2.5 py-1
              text-[10px] font-semibold
              uppercase tracking-wide
              text-(--primary)
            "
          >
            {post.category}
          </span>

          <h3
            className="
              mt-3 line-clamp-2
              text-base font-semibold
              leading-6
              text-(--foreground)
              transition-colors
              group-hover:text-(--primary)
            "
          >
            {post.title}
          </h3>

          <p
            className="
              mt-2 line-clamp-2
              text-xs leading-5
              text-(--muted-foreground)
            "
          >
            {post.description}
          </p>

          <div
            className="
              mt-4 flex items-center
              justify-between
              text-xs
              text-(--muted-foreground)
            "
          >
            <span>External article</span>

            <span
              className="
                inline-flex items-center gap-1
                font-medium
                text-(--foreground)
                transition-colors
                group-hover:text-(--primary)
              "
            >
              Read article
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </article>
    </a>
  );
};

const FeaturedPost = () => {
  /*
   * Duplicate the posts so the second set immediately follows
   * the first set. This creates a seamless infinite marquee.
   */
  const marqueePosts = [
    ...featuredPosts,
    ...featuredPosts,
  ];

  return (
    <section
      id="featured"
      className="
        overflow-hidden
        bg-(--background)
        py-16
        sm:py-20
      "
    >
      {/* Section heading */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8">
          <p
            className="
              text-xs font-semibold
              uppercase tracking-[0.18em]
              text-(--primary)
            "
          >
            Featured research
          </p>

          <h2
            className="
              mt-2 text-2xl font-semibold
              tracking-tight
              text-(--foreground)
              sm:text-3xl
            "
          >
            Research worth exploring
          </h2>

          <p
            className="
              mt-2 max-w-2xl
              text-sm leading-6
              text-(--muted-foreground)
            "
          >
            Discover research, AI breakthroughs, and
            academic insights from trusted sources across
            the web.
          </p>
        </div>
      </div>

      {/* Infinite horizontal marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div
          className="
            pointer-events-none
            absolute left-0 top-0 z-10
            h-full w-16
            bg-linear-to-r
            from-(--background)
            to-transparent
            sm:w-24
          "
        />

        {/* Right fade */}
        <div
          className="
            pointer-events-none
            absolute right-0 top-0 z-10
            h-full w-16
            bg-linear-to-l
            from-(--background)
            to-transparent
            sm:w-24
          "
        />

        <div
          className="
            flex w-max
            gap-5
            animate-[featured-marquee_55s_linear_infinite]
            hover:[animation-play-state:paused]
          "
        >
          {marqueePosts.map((post, index) => (
            <FeaturedPostCard
              key={`${post.title}-${index}`}
              post={post}
            />
          ))}
        </div>
      </div>

      {/* Small helper text */}
      <div className="mx-auto mt-7 max-w-7xl px-6 sm:px-8 lg:px-10">
        <p className="text-center text-xs text-(--muted-foreground)">
          Hover over an article to pause the carousel ·
          Click any article to read the original source
        </p>
      </div>
    </section>
  );
};

export default FeaturedPost;