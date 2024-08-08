// A single Navigation component within the header that will use Link components from react-router-dom to conditionally render the different sections of your portfolio

import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap/";
import { Link } from "react-router-dom";
// Import bootstrap and style sheet to apply styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";

function Navigation() {
  return (
    <Navbar bg="Nav" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Joseph Ruff
        </Navbar.Brand>
        <Nav className="py-2">
          <Nav.Link as={Link} to="/aboutme">
            About Me
          </Nav.Link>
          <Nav.Link as={Link} to="/portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/resume">
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
