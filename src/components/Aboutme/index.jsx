import React from "react";
import myImage from "../../assets/images/joe.png";
import { Card, Container, Row, Col } from "react-bootstrap/";
import "../Aboutme/about-me.css";
function Aboutme() {
  return (
    <Container className="mt-5 mb-5">
      <Card className="aboutme-card">
        <Card.Body className="text-center">
          <h1 className="display-4 mb-5 font-weight-bold">About Me</h1>
          <Row className="align-items-center">
            <Col md={4} className="text-center">
              <img
                src={myImage}
                alt="Joe"
                className="rounded-circle image-fluid mb-3"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col md={8} className="text-left">
              <h2 className="display-5 mb-3 font-weight-bold">Joseph</h2>
              <p className="lead mb-3">Full-stack Developer</p>
              <p className="text-muted">
                Personable and passionate full-stack developer with a background
                in health insurance and customer service and a Full Stack
                Certificate from the University of Central Florida. Proficient
                in Node.js, React, Express, MongoDB, Postgres, JavaScript, CSS,
                HTML, and creating responsive applications. Collaborative and
                skilled in high-stress problem-solving. Enjoys connecting with
                co-workers and building applications to improve everyday life.
                Seeking to leverage attention to detail and technical skills to
                become a valuable asset to a company.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Aboutme;
