import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap/";

// import stylesheets
import "../Portfolio/portfolioStyle.css";
// Add all of your projects into the component to pass into the page

const Portfolio = () => (
  <Container className="containerPadding">
    <Row>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="imgStyle customImageClass" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="secondary">Repo</Button>
            <Button variant="secondary">Live site</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="imgStyle customImageClass" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="secondary">Repo</Button>
            <Button variant="secondary">Live site</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="imgStyle customImageClass" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="secondary">Repo</Button>
            <Button variant="secondary">Live site</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="imgStyle customImageClass" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="secondary">Repo</Button>
            <Button variant="secondary">Live site</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="imgStyle customImageClass" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="secondary">Repo</Button>
            <Button variant="secondary">Live site</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="imgStyle customImageClass" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="secondary">Repo</Button>
            <Button variant="secondary">Live site</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Portfolio;
