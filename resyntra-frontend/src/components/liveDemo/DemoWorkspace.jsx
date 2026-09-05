import Sidebar from "./Sidebar";
import DocumentViewer from "./DocumentViewer";
import AIAssistant from "./AIAssistant";
import StatusBar from "./StatusBar";

const DemoWorkspace = () => {
  return (
    <div className="flex h-175 flex-col">

      {/* Workspace */}

      <div className="grid flex-1 grid-cols-12">

        {/* Sidebar */}

        <div className="col-span-3 border-r border-border">
          <Sidebar />
        </div>

        {/* Document */}

        <div className="col-span-6 border-r border-border">
          <DocumentViewer />
        </div>

        {/* AI */}

        <div className="col-span-3">
          <AIAssistant />
        </div>

      </div>

      <StatusBar />

    </div>
  );
};

export default DemoWorkspace;