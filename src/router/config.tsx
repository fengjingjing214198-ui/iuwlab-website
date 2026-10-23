import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import News from "../pages/news/page";
import Research from "../pages/research/page";
import ResearchDetail from "../pages/research/detail/page";
import Achievements from "../pages/achievements/page";
import AchievementDetail from "../pages/achievements/detail/page";
import Projects from "../pages/projects/page";
import Software from "../pages/software/page";
import Team from "../pages/team/page";
import Join from "../pages/join/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/research/:projectId",
    element: <ResearchDetail />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
  },
  {
    path: "/achievements/:itemId",
    element: <AchievementDetail />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/software",
    element: <Software />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;