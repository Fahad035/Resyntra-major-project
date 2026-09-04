import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";

import Home from "@/pages/public/Home";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;