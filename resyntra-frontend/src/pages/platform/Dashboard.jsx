import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  FolderKanban,
  FileText,
  StickyNote,
  Quote,
  MessageSquare,
} from "lucide-react";
import toast from "react-hot-toast";

import PageLayout from "@/layouts/PageLayout";
import { Container } from "@/components/ui";
import { getDashboard } from "@/api/dashboard";

const cards = [
  ["total_projects", "Projects", FolderKanban],
  ["total_collections", "Collections", BookOpen],
  ["total_papers", "Research Papers", FileText],
  ["total_notes", "Notes", StickyNote],
  ["total_citations", "Citations", Quote],
  ["total_chat_sessions", "Chat Sessions", MessageSquare],
];

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const result = await getDashboard();
        if (mounted) setData(result);
      } catch (error) {
        toast.error(error?.response?.data?.detail || "Unable to load dashboard.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-surface pb-20 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Research Dashboard
            </p>
            <h1 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">
              Your research at a glance
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Monitor your papers, projects, notes, citations, collections, and AI conversations from one workspace.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map(([key, label, Icon], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-border bg-surface/80 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">{label}</span>
                  <Icon className="h-5 w-5 text-(--primary)" />
                </div>
                <p className="mt-5 text-3xl font-semibold text-foreground">
                  {loading ? "—" : data?.[key] ?? 0}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
};

export default Dashboard;
