import React from "react";
import headerImg from "../assets/images/header.png";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <img src={headerImg} alt="Header" />
      <Navigation />
    </header>
  );
};

export default Header;
