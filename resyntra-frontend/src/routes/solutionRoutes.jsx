import Students from "@/pages/solutions/Students";
import Researchers from "@/pages/solutions/Researchers";
import Universities from "@/pages/solutions/Universities";
import Professors from "@/pages/solutions/Professors";

const solutionRoutes = [
  {
    path: "students",
    element: <Students />,
  },
  {
    path: "researchers",
    element: <Researchers />,
  },
  {
    path: "universities",
    element: <Universities />,
  },
  {
    path: "professors",
    element: <Professors />,
  },
];

export default solutionRoutes;