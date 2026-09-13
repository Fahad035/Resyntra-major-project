import Home from "@/pages/public/Home";
import Pricing from "@/pages/public/Pricing";
import About from "@/pages/public/About";

const publicRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "pricing",
    element: <Pricing />,
  },
  {
    path: "about",
    element: <About />,
  },
];

export default publicRoutes;