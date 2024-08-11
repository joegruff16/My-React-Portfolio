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
          <Card.Img variant="top" className="payRollXCard" />
          <Card.Body>
            <Card.Title>Payroll-x APP</Card.Title>
            <Button
              variant="secondary"
              href="https://github.com/joegruff16/payroll-x-app"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="secondary"
              href="https://joegruff16.github.io/payroll-x-app/"
              target="_blank"
            >
              Live site
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardStyle" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="peerPathCard customImageClass" />
          <Card.Body>
            <Card.Title>PeerPath-API</Card.Title>
            <Button
              variant="secondary"
              href="https://github.com/joegruff16/PeerPath-API"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="secondary"
              href="https://drive.google.com/file/d/1-PBfNzfuoMLNWl25tV_g83dpI89iBmzp/view?usp=sharing"
              target="_blank"
            >
              Live site
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Portfolio;
