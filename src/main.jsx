// Import React modules that we need for our page routes to work
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import React icons for footer
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
// Import Bootstrap and styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/style.css";
// Import pages
import Landing from "./pages/Landing";
import Aboutme from "./pages/AboutmePage";
import Contact from "./pages/Contact";
import Portfolio from "./pages/PortfolioPage";
import Resume from "./pages/ResumePage";
import Footer from "./components/Footer";

// Social links are defined below
export const socialLinks = [
  {
    id: 1,
    icon: <FaGithub />,
    url: "https://github.com/joegruff16",
  },

  {
    id: 2,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/joseph-ruff-gary0316/",
  },
  {
    id: 3,
    icon: <BsSubstack />,
    url: "https://substack.com/@josephjoeruff",
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "aboutme",
        element: <Aboutme />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer socialLinks={socialLinks} />
  </React.StrictMode>
);
