import WorkspaceHeader from "./WorkspaceHeader";
import Sidebar from "./SideBar";
import PaperViewer from "./PaperViewer";
import AIAssistant from "./AiAssistant";

const WorkspacePreview = () => {
  return (
    <section className="mt-28 w-full max-w-7xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-2xl">
        <WorkspaceHeader />

        <div className="flex min-h-150">
          <Sidebar />

          <PaperViewer />

          <AIAssistant />
        </div>
      </div>
    </section>
  );
};

export default WorkspacePreview;