import PageLayout from "@/layouts/PageLayout";

import DocsHeader from "@/components/resources/docs/DocsHeader";
import DocsMobileNav from "@/components/resources/docs/DocsMobileNav";
import DocsSidebar from "@/components/resources/docs/DocsSidebar";
import DocsContent from "@/components/resources/docs/DocsContent";
import DocsTableOfContents from "@/components/resources/docs/DocsTableOfContents";

const Documentation = () => {
  return (
    <PageLayout>
      <div className="flex h-screen flex-col overflow-hidden bg-(--background) text-(--foreground)">
        {/* Documentation Header */}
        <div className="shrink-0">
          <DocsHeader />
        </div>

        {/* Documentation Workspace */}
        <div className="min-h-0 flex-1">
          {/* Mobile */}
          <div className="flex h-full flex-col lg:hidden">
            <div className="shrink-0 border-b border-(--border) px-6 py-4 sm:px-8">
              <DocsMobileNav />
            </div>

            <main className="min-h-0 flex-1 overflow-y-auto px-6 py-8 sm:px-8">
              <DocsContent />
            </main>
          </div>

          {/* Desktop */}
          <div className="mx-auto hidden h-full max-w-7xl lg:flex">
            {/* Left Sidebar */}
            <aside className="w-64 shrink-0 border-r border-(--border)">
              <div className="h-full overflow-y-auto px-0 py-8 pr-5">
                <DocsSidebar />
              </div>
            </aside>

            {/* Main Content */}
            <main className="min-w-0 flex-1 overflow-y-auto">
              <div className="px-8 py-10 lg:px-10">
                <DocsContent />
              </div>
            </main>

            {/* Right Navigation */}
            <aside className="hidden w-52 shrink-0 border-l border-(--border) xl:block">
              <div className="h-full overflow-y-auto px-5 py-10">
                <DocsTableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Documentation;