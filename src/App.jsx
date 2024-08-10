import React from "react";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

// Imports for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/style.css";

function App() {
  return (
    <div className="fluid">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

// Vite process
// Step 1: npm create vite
// Step 2:  cd into new project folder that was created
// Step 3: npm install
// Step 4: npm run develop
// Vite -
// is a single-line comment that reads `// Vite`. This comment likely serves as a reminder or note to indicate that the project is using Vite as its build tool.

// Vite is a modern build tool that provides a fast development environment for JavaScript and TypeScript projects, particularly those using frameworks like React. It offers several advantages over traditional build tools like Webpack, including faster hot module replacement (HMR), optimized build performance, and a more straightforward configuration process.

// In the context of your React project, using Vite can significantly improve your development experience by reducing build times and providing a more responsive development server. This comment might be placed here to inform other developers or remind yourself that the project setup involves Vite, which could be relevant for understanding the project's configuration and build process.
