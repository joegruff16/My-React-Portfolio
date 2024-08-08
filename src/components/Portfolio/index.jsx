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
          <Card.Img variant="top" className="journeyCard" />
          <Card.Body>
            <Card.Title>Journey's End</Card.Title>
            <Button
              variant="secondary"
              href="https://github.com/joegruff16/Journeys-End"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="secondary"
              href="https://joegruff16.github.io/Journeys-End/"
              target="_blank"
            >
              Live site
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="weatherForecastCard" />
          <Card.Body>
            <Card.Title>your-weather-forecast</Card.Title>
            <Button
              variant="secondary"
              href="https://github.com/joegruff16/your-weather-forecast"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="secondary"
              href="https://joegruff16.github.io/your-weather-forecast/"
              target="_blank"
            >
              Live site
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="tutorHubCard" />
          <Card.Body>
            <Card.Title>tutorHub</Card.Title>
            <Button
              variant="secondary"
              href="https://github.com/joegruff16/tutorHub"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="secondary"
              href="https://tutorhub-spk8.onrender.com/"
              target="_blank"
            >
              Live site
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="noteCraftCard" />
          <Card.Body>
            <Card.Title>noteCraft</Card.Title>
            <Button
              variant="secondary"
              href="https://github.com/joegruff16/noteCraft"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="secondary"
              href="https://notecraft-app.onrender.com/"
              target="_blank"
            >
              Live site
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="imgStyle" />
          <Card.Body>
            <Card.Title>Payroll-x APP</Card.Title>
            <Button variant="secondary">Repo</Button>
            <Button variant="secondary">Live site</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="imgStyle customImageClass" />
          <Card.Body>
            <Card.Title>React-Portfolio-TailwindCSS</Card.Title>
            <Button variant="secondary">Repo</Button>
            <Button variant="secondary">Live site</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Portfolio;
