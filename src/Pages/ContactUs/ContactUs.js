import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const ContactUs = () => {
    const handleMassageSubmit = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const message = event.target.message.value;
        if(email || message){
            toast.success("Massage Successfully !!")
            event.target.reset()
        }
    }
  return (
    <div className="container my-5">
      <h2 className="text-center text-info">Contact Us</h2>
      <Form onSubmit={handleMassageSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address: <span className="text-danger">*</span> </Form.Label>
          <Form.Control type="email" name="email" placeholder="enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message: <span className="text-danger">*</span></Form.Label>
          <Form.Control as="textarea" name="massage" rows={3}  required/>
        </Form.Group>
        <Button className="w-50" variant="primary" type="submit">
          Send Massage
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
