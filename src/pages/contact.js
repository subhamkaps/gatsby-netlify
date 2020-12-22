import React from "react";
import { Form, Button } from "react-bootstrap";
import PrimaryLayout from "../layouts/primary-layout";

const about = () => {
  return (
    <PrimaryLayout column="col-10">
      <div className="pt-5 pb-2">
        <h1>Contact Us</h1>
      </div>
      <Form>
        <Form.Group controlId="contactForm.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email..." />
        </Form.Group>
        <Form.Group controlId="contactForm.Subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject..." />
        </Form.Group>
        <Form.Group controlId="contactForm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    </PrimaryLayout>
  );
};

export default about;
