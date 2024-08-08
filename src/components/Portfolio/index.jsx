import React from "react";
import { Card, Button } from "react-bootstrap/";

// import stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "../Portfolio/portfolioStyle.css";
// Add all of your projects into the component to pass into the page
function Portfolio() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" className="imgStyle customImageClass" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="secondary">Repo</Button>
          <Button variant="secondary">Live site</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="right" className="imgStyle customImageClass" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="secondary">Repo</Button>
          <Button variant="secondary">Live site</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Portfolio;
