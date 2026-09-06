import Students from "@/pages/solutions/Students";
import Researchers from "@/pages/solutions/Researchers";
import Universities from "@/pages/solutions/Universities";
import Professors from "@/pages/solutions/Professors";

const solutionRoutes = [
  {
    path: "/solutions/students",
    element: <Students />,
  },
  {
    path: "/solutions/researchers",
    element: <Researchers />,
  },
  {
    path: "/solutions/universities",
    element: <Universities />,
  },
  {
    path: "/solutions/professors",
    element: <Professors />,
  },
];

export default solutionRoutes;