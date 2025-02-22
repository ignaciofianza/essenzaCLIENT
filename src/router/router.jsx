import { createBrowserRouter } from "react-router-dom";

/* LAYOUTS */
import PublicLayout from "../Layout/PublicLayout";
import AuthLayout from "../Layout/AuthLayout";
/* LAYOUTS */

/* Public PAGES */
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Err404 from "../Pages/Err404";
/* Public PAGES */

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
        path: "sobrenosotros",
        element: <About />,
      },
      {
        path: "contacto",
        element: <Contact />,
      },
    ],
  },
  {
    path: "login", 
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "register",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
  { path: "*", element: <Err404 /> },
]);
