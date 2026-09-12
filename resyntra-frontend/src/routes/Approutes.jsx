import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";

import publicRoutes from "./publicRoutes";
import platformRoutes from "./platformRoutes";
import solutionRoutes from "./solutionRoutes";
// import resourceRoutes from "./resourceRoutes";
// import companyRoutes from "./companyRoutes";
import authRoutes from "./authRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      ...publicRoutes,
      ...platformRoutes,
      ...solutionRoutes,
      // ...resourceRoutes,
      // ...companyRoutes,
    ],
  },
  // Auth pages render their own full-page AuthLayout, so they sit
  // outside PublicLayout and never get the site Navbar/Footer.
  ...authRoutes,
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;