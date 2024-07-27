import React from "react";
import Footer from "./components/Footer";
import { Alert, Button, Card, Form } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="test@gmail.com" />
            <Form.Text className="text-muted">
              We'll never use your email
            </Form.Text>
          </Form.Group>
        </Form>
        <Card className="mb-3" style={{ color: "#0081A7" }}>
          <Card.Img />
          <Card.Body />
          <Card.Title>Hello, my name is Joe.</Card.Title>
          <Card.Text>Welcome to my Portfolio</Card.Text>
        </Card>
        <Button>Test Button</Button>
        <Alert>Use this instead</Alert>

        {/* <Nav />
        <Intro />
        <Porfolio />
        <Timeline />
        <Contact /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
