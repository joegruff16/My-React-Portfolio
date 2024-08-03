// A single Navigation component within the header that will use Link components from react-router-dom to conditionally render the different sections of your portfolio

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#landing">Joe's Portfolio</Navbar.Brand>
        <Nav className="'me-auto">
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
