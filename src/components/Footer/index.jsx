import React from "react";
// import react icons for social media portion of footer

import { Container, Row, Col, ListGroup } from "react-bootstrap/";

// Example Footer

function Footer({ socialLinks = [] }) {
  return (
    <Container className="mt-5 pt-5 border-top">
      <Row className="justify-content-center text-center mb-5">
        <Col>
          <p className="h3 mb-4">Follow me</p>
          <ListGroup horizontal className="justify-content-center">
            {socialLinks.map((link) => (
              <ListGroup.Item
                key={link.id}
                className="border-0 bg-transparent p-0"
              >
                <a
                  href={link.url}
                  target="__blank"
                  className="text-secondary hover-text-primary"
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "#f8f9fa",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <i className={`h4 ${link.icon}`}></i>
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
// <div className="text-center">
//   <p className="text-sm">
//     &copy; {new Date().getFullYear()} Joseph Ruff. All rights reserved.
//   </p>
// </div>

export default Footer;
