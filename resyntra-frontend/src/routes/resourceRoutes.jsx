import Resources from "@/pages/resources/Resources";

import Documentation from "@/pages/resources/Documentation";
import Tutorials from "@/pages/resources/Tutorials";
import Blog from "@/pages/resources/Blog";
import APIReference from "@/pages/resources/APIReference";
import Roadmap from "@/pages/resources/Roadmap";
import Support from "@/pages/resources/Support";

const resourceRoutes = [
  {
    path: "resources",
    element: <Resources />,
  },
  {
    path: "resources/documentation",
    element: <Documentation />,
  },
  {
    path: "resources/tutorials",
    element: <Tutorials />,
  },
  {
    path: "resources/blog",
    element: <Blog />,
  },
  {
    path: "resources/api-reference",
    element: <APIReference />,
  },
  {
    path: "resources/roadmap",
    element: <Roadmap />,
  },
  {
    path: "resources/support",
    element: <Support />,
  },
];

export default resourceRoutes;