import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import styled from "@emotion/styled";

const Button = styled.button`
  font-family: "Varela Round", sans-serif;
  background-color: #42aba1;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 10px 60px;
  margin: 0;
  ${"" /* position: absolute; */}
  ${
    "" /* -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-top: 20px; */
  }
`;

const Contact = () => {
  return (
    <Container
      id="contact"
      style={{
        textAlign: "center",
      }}
    >
      <Form>
        <Form.Label
          style={{ fontFamily: "Varela Round, sans-serif", fontWeight: "600" }}
        >
          שם
        </Form.Label>
        <Form.Group controlId="form.Name">
          <Form.Control
            type="text"
            placeholder="השם שלך"
            style={{
              fontFamily: "Varela Round, sans-serif",
              textAlign: "right",
              width: "200px",
              height: "30px",
            }}
          />
        </Form.Group>
        <Form.Label
          style={{ fontFamily: "Varela Round, sans-serif", fontWeight: "600" }}
        >
          מייל
        </Form.Label>
        <Form.Group controlId="form.Email">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            style={{
              fontFamily: "Varela Round, sans-serif",
              width: "200px",
              height: "30px",
            }}
          />
        </Form.Group>
        <Form.Label
          style={{ fontFamily: "Varela Round, sans-serif", fontWeight: "600" }}
        >
          תגובה
        </Form.Label>
        <Form.Group controlId="form.Textarea">
          <Form.Control
            as="textarea"
            rows={3}
            style={{
              fontFamily: "Varela Round, sans-serif",
              textAlign: "right",
              width: "200px",
            }}
          />
        </Form.Group>
        <Button>שלח</Button>
      </Form>
    </Container>
  );
};

export default Contact;
