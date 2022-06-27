import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.inti";
import Loading from "../../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const emailRef = useRef("");
  const [emailFiledEmpty, setEmailFiledEmpty] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  // handle Login in submit form
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  // handle forget password
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
      setEmailFiledEmpty(false);
    } else {
      setEmailFiledEmpty(true);
      toast("Please enter you email");
    }
  };

  // user
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }
  return (
    <div className="container my-5">
      <h2 className="text-center text-info">Please Login</h2>
      <Form
        onSubmit={handleLogin}
        className="w-50 mx-auto border border-3 border-success p-5"
      >
        {errorElement}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className={
              emailFiledEmpty ? "border border-4 border-danger" : " border-none"
            }
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        {/* 
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <p onClick={handleForgetPassword}>
          <span className="btn btn-link">Forget Password</span>
        </p>

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
