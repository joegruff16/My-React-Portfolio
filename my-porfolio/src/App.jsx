import React, { useState } from "react";
import Footer from "./components/Footer";
// import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>My Portfolio</h1>
      <div className="card">
        <Nav />
        <Intro />
        <Porfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
