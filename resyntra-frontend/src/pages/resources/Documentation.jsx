import { useRef, useState } from "react";
import PageLayout from "@/layouts/PageLayout";

import DocsHeader from "@/components/resources/docs/DocsHeader";
import DocsMobileNav from "@/components/resources/docs/DocsMobileNav";
import DocsSidebar from "@/components/resources/docs/DocsSidebar";
import DocsTableOfContents from "@/components/resources/docs/DocsTableOfContents";

import IntroductionContent from "@/components/resources/docs/content/IntroductionContent";
import QuickstartContent from "@/components/resources/docs/content/QuickstartContent";
import WorkspaceContent from "@/components/resources/docs/content/WorkspaceContent";
import UploadPapersContent from "@/components/resources/docs/content/UploadPapersContent";
import PaperManagementContent from "@/components/resources/docs/content/PaperManagementContent";
import CollectionsContent from "@/components/resources/docs/content/CollectionsContent";
import ProjectsContent from "@/components/resources/docs/content/ProjectsContent";
import AISummarizerContent from "@/components/resources/docs/content/AISummarizerContent";
import ChatContent from "@/components/resources/docs/content/ChatContent";
import SemanticSearchContent from "@/components/resources/docs/content/SemanticSearchContent";
import LiteratureReviewContent from "@/components/resources/docs/content/LiteratureReviewContent";
import ResearchGapContent from "@/components/resources/docs/content/ResearchGapContent";
import NotesContent from "@/components/resources/docs/content/NotesContent";
import CitationsContent from "@/components/resources/docs/content/CitationsContent";
import AnalyticsContent from "@/components/resources/docs/content/AnalyticsContent";
import PPTGeneratorContent from "@/components/resources/docs/content/PPTGeneratorContent";
import APIReferenceContent from "@/components/resources/docs/content/APIReferenceContent";
import AuthenticationContent from "@/components/resources/docs/content/AuthenticationContent";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const docsScrollRef = useRef(null);

  const handleSectionChange = (section) => {
    setActiveSection(section);

    requestAnimationFrame(() => {
      docsScrollRef.current?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "authentication":
        return (
          <AuthenticationContent
            onSectionChange={handleSectionChange}
          />
        );

      case "api-reference":
        return (
          <APIReferenceContent
            onSectionChange={handleSectionChange}
          />
        );

      case "ppt-generator":
        return (
          <PPTGeneratorContent
            onSectionChange={handleSectionChange}
          />
        );

      case "analytics":
        return (
          <AnalyticsContent
            onSectionChange={handleSectionChange}
          />
        );

      case "citations":
        return (
          <CitationsContent
            onSectionChange={handleSectionChange}
          />
        );

      case "notes":
        return (
          <NotesContent
            onSectionChange={handleSectionChange}
          />
        );

      case "research-gap":
        return (
          <ResearchGapContent
            onSectionChange={handleSectionChange}
          />
        );

      case "literature-review":
        return (
          <LiteratureReviewContent
            onSectionChange={handleSectionChange}
          />
        );

      case "semantic-search":
        return (
          <SemanticSearchContent
            onSectionChange={handleSectionChange}
          />
        );

      case "chat":
        return (
          <ChatContent
            onSectionChange={handleSectionChange}
          />
        );

      case "ai-summarizer":
        return (
          <AISummarizerContent
            onSectionChange={handleSectionChange}
          />
        );

      case "projects":
        return (
          <ProjectsContent
            onSectionChange={handleSectionChange}
          />
        );

      case "collections":
        return (
          <CollectionsContent
            onSectionChange={handleSectionChange}
          />
        );

      case "paper-management":
        return (
          <PaperManagementContent
            onSectionChange={handleSectionChange}
          />
        );

      case "upload-papers":
        return (
          <UploadPapersContent
            onSectionChange={handleSectionChange}
          />
        );

      case "quickstart":
        return (
          <QuickstartContent
            onSectionChange={handleSectionChange}
          />
        );

      case "workspace":
        return (
          <WorkspaceContent
            onSectionChange={handleSectionChange}
          />
        );

      case "introduction":
      default:
        return (
          <IntroductionContent
            onSectionChange={handleSectionChange}
          />
        );
    }
  };

  return (
    <PageLayout>
      <div className="flex h-screen flex-col overflow-hidden bg-(--background) text-(--foreground)">
        {/* Documentation Header */}
        <div className="shrink-0">
          <DocsHeader
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        </div>

        {/* Documentation Workspace */}
        <div className="min-h-0 flex-1">
          {/* =========================
              MOBILE
          ========================= */}
          <div className="flex h-full flex-col lg:hidden">
            <div className="shrink-0 border-b border-(--border) px-6 py-4 sm:px-8">
              <DocsMobileNav
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
              />
            </div>

            <main className="min-h-0 flex-1 overflow-y-auto px-6 py-8 sm:px-8">
              {renderContent()}
            </main>
          </div>

          {/* =========================
              DESKTOP
          ========================= */}
          <div className="mx-auto hidden h-full max-w-7xl lg:flex">
            {/* Left Sidebar */}
            <aside className="w-64 shrink-0 border-r border-(--border)">
              <div className="h-full overflow-y-auto px-0 py-8 pr-5">
                <DocsSidebar
                  activeSection={activeSection}
                  onSectionChange={handleSectionChange}
                />
              </div>
            </aside>

            {/* Main Content */}
            <main
              ref={docsScrollRef}
              className="min-w-0 flex-1 overflow-y-auto"
            >
              <div className="px-8 py-10 lg:px-10">
                {renderContent()}
              </div>
            </main>

            {/* Right Navigation */}
            <aside className="hidden w-52 shrink-0 border-l border-(--border) xl:block">
              <div className="h-full overflow-y-auto px-5 py-10">
                <DocsTableOfContents
                  activeSection={activeSection}
                  scrollContainerRef={docsScrollRef}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Documentation;