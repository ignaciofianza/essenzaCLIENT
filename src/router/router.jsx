import { createBrowserRouter } from "react-router-dom";

/* LAYOUTS */
import PublicLayout from "../Layout/PublicLayout"
import Err404 from "../Pages/Err404";
/* LAYOUTS */

/* PAGES */
import Home from "../Pages/Home";
import About from "../Pages/About";
/* PAGES */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/sobrenosotros",
        element: <About />,
      },
    ],
  },
  { path: "*", element: <Err404 /> },
]);
