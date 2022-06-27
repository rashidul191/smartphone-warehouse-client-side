import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-info">Please Login</h2>
      
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
