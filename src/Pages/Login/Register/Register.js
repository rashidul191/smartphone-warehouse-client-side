import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.inti";
// import Loading from "../../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [agree, setAgree] = useState(false);
  const [passwordOk, setPasswordOk] = useState(false);

  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  let location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword) {
      console.log(name, email, password, confirmPassword);
      createUserWithEmailAndPassword(email, password);
      setPasswordOk(true);
    } else {
      setPasswordOk(false);
    }
    setValidated(true);
  };

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  //   if (loading) {
  //     return <Loading></Loading>;
  //   }
  return (
    <div className="container my-sm-5">
      <h2 className="text-center text-info">Create a New Account</h2>
      <Form
        className="w-50 mx-auto border border-3 border-success p-5"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group md="4" controlId="validationCustom01">
            {errorElement}
            <Form.Label>Name *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="enter your name"
              name="name"
            />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="enter email"
            />
            <Form.Control.Feedback type="invalid">
              Please provide valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="enter password"
            />
            <Form.Control.Feedback type="invalid">
              Please provide password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Confirm Password *</Form.Label>
            <Form.Control
              required
              type="password"
              name="confirmPassword"
              placeholder="Confirm  password"
            />
            <Form.Control.Feedback type="invalid">
              Please provide Confirm password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* <Row className="mb-3">
        <Form.Group  md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row> */}

        <Form.Group className="mb-3">
          <Form.Check
            required
            onClick={() => setAgree(!agree)}
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        {passwordOk || (
          <ul className="text-danger">
            <li>Password more then 6 characters</li>
            <li>At least one special character.</li>
            <li>password = Confirm Password</li>
          </ul>
        )}

        <Button disabled={!agree} className="w-50" type="submit">
          Registration
        </Button>
      </Form>

      <p className="text-center mt-4">
        Already Have a Account ? <Link to="/login">Please Login</Link>
      </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
