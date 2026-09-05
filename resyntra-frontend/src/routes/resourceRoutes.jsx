import Documentation from "@/pages/resources/Documentation";
import Tutorials from "@/pages/resources/Tutorials";
import Blog from "@/pages/resources/Blog";
import APIReference from "@/pages/resources/APIReference";
import Roadmap from "@/pages/resources/Roadmap";
import Support from "@/pages/resources/Support";

const resourceRoutes = [
  {
    path: "documentation",
    element: <Documentation />,
  },
  {
    path: "tutorials",
    element: <Tutorials />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "api-reference",
    element: <APIReference />,
  },
  {
    path: "roadmap",
    element: <Roadmap />,
  },
  {
    path: "support",
    element: <Support />,
  },
];

export default resourceRoutes;