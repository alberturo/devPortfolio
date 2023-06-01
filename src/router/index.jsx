import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import Who from "../pages/Who";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/who",
        element: <Who />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
