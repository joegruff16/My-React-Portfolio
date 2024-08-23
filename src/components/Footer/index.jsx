import React from "react";
// import react icons for social media portion of footer
import { socialLinks } from "../../main";
import { Container, Row, Col, ListGroup } from "react-bootstrap/";

function Footer() {
  return (
    <Container className="mt-5 pt-5 border-top">
      <Row className="justify-content-center text-center mb-5">
        <Col>
          <p className="h3 mb-4">Follow me</p>
          <ListGroup horizontal className="justify-content-center">
            {socialLinks.map((link) => (
              <ListGroup.Item
                key={link.id}
                className="border-0 bg-transparent p-1"
              >
                <a
                  href={link.url}
                  target="__blank"
                  className="text-secondary hover-text-secondary"
                  style={{
                    textDecoration: "none",
                    padding: "12px",
                    borderRadius: "10px",
                    // backgroundColor: "transparent",
                    transform: "scale(1.05)",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s ease",
                    color: "white",
                  }}
                >
                  {link.icon}
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
