import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);
