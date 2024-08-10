import React from "react";
import Container from "react-bootstrap/Container";
import "../LandingPage/landingStyle.css";
function LandingPage() {
  return (
    <Container>
      <h1 className="intro">
        Hello there, my name is Joe. <span className="landingImg"></span> I am a
        Full-Stack Developer <span className="developerImg"></span> based in
        sunny Florida. <span className="floridaImg"></span>
      </h1>
    </Container>
  );
}

export default LandingPage;
