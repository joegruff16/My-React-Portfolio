import Container from "react-bootstrap/Container";
import { Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
function Contact() {
  return (
    <>
      <h1>Contact Me</h1>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              className="py-5"
              type="message"
              placeholder="Enter your message here"
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Contact;
