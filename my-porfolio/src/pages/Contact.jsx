import Form from "react-bootstrap/Form";
function Contact() {
  return (
    <>
      <h1>Contact Me</h1>
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="test@gmail.com" />
            <Form.Text className="text-muted">
              We'll never use your email
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default Contact;
