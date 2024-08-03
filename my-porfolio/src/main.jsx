// Import React modules that we need for our page routes to work
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import Bootstrap and styles
import "bootstrap/dist/css/bootstrap.min.css";
// Import pages
import Landing from "../src/pages/Landing";
import AboutMe from "../src/pages/Aboutme";
import Contact from "../src/pages/Contact";
import Portfolio from "../src/pages/Portfolio";
import Resume from "../src/pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Landing />,
      },
      {
        path: "/Aboutme",
        element: <AboutMe />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
