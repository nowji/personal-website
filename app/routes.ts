import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("../src/pages/HomePage.tsx"),
  route("experience", "../src/pages/ExperiencePage.tsx"),
  route("coursework", "../src/pages/CoursePage.tsx"),
  route("research", "../src/pages/ResearchPage.tsx"),
] satisfies RouteConfig;
