import { Search, Command, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const DocsHeader = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-(--border) bg-(--background)/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 sm:px-8 lg:px-10">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">
          <Link
            to="/resources/documentation"
            className="shrink-0 text-sm font-semibold text-(--foreground)"
          >
            Resyntra Docs
          </Link>

          <span className="text-(--muted-foreground)">/</span>

          <span className="hidden truncate text-sm text-(--muted-foreground) sm:block">
            Documentation
          </span>
        </div>

        {/* Search */}
        <button
          type="button"
          className="
            group
            flex
            h-9
            w-full
            max-w-md
            items-center
            gap-3
            rounded-lg
            border
            border-(--border)
            bg-(--surface)
            px-3
            text-left
            transition-all
            duration-200
            hover:border-(--primary)/40
            hover:bg-(--surface-secondary)
          "
        >
          <Search className="h-4 w-4 shrink-0 text-(--muted-foreground)" />

          <span className="flex-1 text-sm text-(--muted-foreground)">
            Search documentation...
          </span>

          <span className="hidden items-center gap-1 rounded-md border border-(--border) bg-(--background) px-1.5 py-0.5 text-[10px] font-medium text-(--muted-foreground) sm:flex">
            <Command className="h-2.5 w-2.5" />
            K
          </span>
        </button>

        {/* Right */}
        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <Link
            to="/resources/tutorials"
            className="text-sm text-(--muted-foreground) transition-colors hover:text-(--foreground)"
          >
            Tutorials
          </Link>

          <Link
            to="/resources/api-reference"
            className="inline-flex items-center gap-1.5 text-sm text-(--muted-foreground) transition-colors hover:text-(--foreground)"
          >
            API Reference
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DocsHeader;