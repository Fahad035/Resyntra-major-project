import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <Outlet />
    </div>
  );
};

export default MainLayout;