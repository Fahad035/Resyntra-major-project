import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Code2,
  FileText,
  HelpCircle,
  Map,
  Newspaper,
  PlayCircle,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "@/layouts/PageLayout";

const resourceGroups = [
  {
    label: "Learn",
    title: "Build your research workflow",
    description:
      "Learn how to get the most out of Resyntra with practical guides, documentation, and research-focused insights.",
    resources: [
      {
        title: "Documentation",
        description: "Learn every feature and build a better research workflow.",
        href: "/resources/documentation",
        icon: BookOpen,
      },
      {
        title: "Tutorials",
        description: "Follow step-by-step guides for using Resyntra effectively.",
        href: "/resources/tutorials",
        icon: PlayCircle,
      },
      {
        title: "Blog",
        description: "Explore research, AI, academic workflows, and new ideas.",
        href: "/resources/blog",
        icon: Newspaper,
      },
    ],
  },
  {
    label: "Developer",
    title: "Build with Resyntra",
    description:
      "Explore APIs, product updates, upcoming capabilities, and support resources for developers.",
    resources: [
      {
        title: "API Reference",
        description: "Explore the REST APIs available for Resyntra integrations.",
        href: "/resources/api-reference",
        icon: Code2,
      },
      {
        title: "Roadmap",
        description: "See what is coming next and where the platform is heading.",
        href: "/resources/roadmap",
        icon: Map,
      },
      {
        title: "Support",
        description: "Find help when you need assistance with the platform.",
        href: "/resources/support",
        icon: HelpCircle,
      },
    ],
  },
];

const Resources = () => {
  return (
    <PageLayout>
      <main className="relative overflow-hidden bg-(--background)">

        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-130 w-225 -translate-x-1/2 rounded-full bg-(--primary)/5 blur-3xl" />
          <div className="absolute left-[10%] top-125 h-70 w-70 rounded-full bg-(--primary)/5 blur-3xl" />
        </div>

        {/* Hero */}
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-40">
          <div className="max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3.5 py-2 text-xs font-medium text-(--muted-foreground) shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-(--primary)" />
              Resyntra Resources
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-(--foreground) sm:text-5xl lg:text-7xl"
            >
              Everything you need to
              <span className="block text-(--primary)">
                research smarter.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-7 max-w-2xl text-base leading-7 text-(--muted-foreground) sm:text-lg sm:leading-8"
            >
              Explore documentation, tutorials, research insights, developer
              resources, and product updates designed to help you get more
              from Resyntra.
            </motion.p>
          </div>

          {/* Quick navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/resources/documentation"
              className="group inline-flex items-center gap-2 rounded-xl bg-(--primary) px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-(--primary-hover)"
            >
              Explore Documentation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/resources/tutorials"
              className="inline-flex items-center gap-2 rounded-xl border border-(--border) bg-(--surface) px-5 py-3 text-sm font-semibold text-(--foreground) transition-all duration-200 hover:bg-(--surface-secondary)"
            >
              Browse Tutorials
            </Link>
          </motion.div>
        </section>

        {/* Resource groups */}
        <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
          <div className="space-y-20">

            {resourceGroups.map((group, groupIndex) => (
              <motion.section
                key={group.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: groupIndex * 0.05 }}
              >
                {/* Section heading */}
                <div className="mb-8 flex flex-col gap-4 border-b border-(--border) pb-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                      {group.label}
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
                      {group.title}
                    </h2>
                  </div>

                  <p className="max-w-xl text-sm leading-6 text-(--muted-foreground)">
                    {group.description}
                  </p>
                </div>

                {/* Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.resources.map((resource, index) => {
                    const Icon = resource.icon;

                    return (
                      <motion.div
                        key={resource.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.06,
                        }}
                      >
                        <Link
                          to={resource.href}
                          className="group flex h-full min-h-57.5 flex-col rounded-2xl border border-(--border) bg-(--surface) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/30 hover:shadow-(--shadow)"
                        >
                          {/* Icon */}
                          <div className="flex items-start justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-secondary) text-(--primary) transition-all duration-300 group-hover:border-(--primary)/20 group-hover:bg-(--primary)/10">
                              <Icon className="h-5 w-5" />
                            </div>

                            <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-all duration-300 group-hover:translate-x-1 group-hover:text-(--primary)" />
                          </div>

                          {/* Content */}
                          <div className="mt-auto pt-12">
                            <h3 className="text-lg font-semibold text-(--foreground)">
                              {resource.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
                              {resource.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </div>
        </section>

        {/* Featured workflow */}
        <section className="relative border-y border-(--border) bg-(--surface)">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                  Research workflow
                </p>

                <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.035em] text-(--foreground) sm:text-4xl">
                  From your first paper to your final presentation.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-(--muted-foreground) sm:text-base">
                  Resyntra brings discovery, analysis, knowledge management,
                  and AI-assisted research into one connected workflow.
                </p>

                <Link
                  to="/platform/workspace"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--primary)"
                >
                  Explore the Research Workspace
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Workflow visual */}
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Discover",
                    text: "Find relevant research faster.",
                    icon: Newspaper,
                  },
                  {
                    number: "02",
                    title: "Understand",
                    text: "Summarize and chat with papers.",
                    icon: FileText,
                  },
                  {
                    number: "03",
                    title: "Connect",
                    text: "Organize ideas and literature.",
                    icon: GitBranchIcon,
                  },
                  {
                    number: "04",
                    title: "Create",
                    text: "Turn research into useful outputs.",
                    icon: Sparkles,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="rounded-2xl border border-(--border) bg-(--background) p-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider text-(--muted-foreground)">
                          {item.number}
                        </span>

                        <Icon className="h-4 w-4 text-(--primary)" />
                      </div>

                      <h3 className="mt-8 text-base font-semibold text-(--foreground)">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-(--muted-foreground)">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl border border-(--border) bg-(--surface) px-6 py-14 text-center shadow-(--shadow) sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-(--primary)/10 blur-3xl" />

            <div className="relative">
              <Sparkles className="mx-auto h-6 w-6 text-(--primary)" />

              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-(--foreground) sm:text-4xl">
                Ready to research differently?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-(--muted-foreground) sm:text-base">
                Start exploring Resyntra and build a research workflow that
                works around your ideas.
              </p>

              <Link
                to="/register"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-(--primary) px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-(--primary-hover)"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

/*
 * Small local icon alias keeps the workflow data readable
 * without adding another dependency.
 */
const GitBranchIcon = GitBranch;

export default Resources;