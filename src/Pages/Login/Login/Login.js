import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-info">Please Login</h2>
      <Form className="w-50 mx-auto border border-3 border-success p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* 
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <button className="btn btn-link mb-3">Forget Password</button>
        <br />

        <Button className="w-50" variant="info" type="submit">
          Login
        </Button>
      </Form>

      <p className="text-center mt-4">
        New User ? <Link to="/register">Please Register</Link>
      </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
