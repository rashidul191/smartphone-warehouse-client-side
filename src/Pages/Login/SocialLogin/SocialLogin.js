import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.inti";
import Loading from "../../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  let location = useLocation();
  

  let from = location.state?.from?.pathname || "/";

  if (userGoogle || userGithub) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (errorGoogle || errorGithub) {
    errorElement = (
      <p className="text-danger">
        Error: {errorGoogle?.message} {errorGithub?.message}
      </p>
    );
  }

  if (loadingGoogle || loadingGithub) {
    return <Loading></Loading>;
  }

  return (
    <div className=" container w-50 mx-auto text-center mt-4">
      {/* Error Message */}
      {errorElement}
      {/*  <div>
        {errorGoogle ? (
          <p className="text-danger">Error: {errorGoogle.message} {errorGithub.message}</p>
        ) : (
          ""
        )}
        {errorGithub ? (
          <p className="text-danger">Error: {errorGithub.message}</p>
        ) : (
          ""
        )}
      </div> */}

      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-success w-50"
      >
        Google Login
      </button>
      <br />
      <br />

      <button
        onClick={() => signInWithGithub()}
        className="btn btn-primary w-50"
      >
        Github Login
      </button>
    </div>
  );
};

export default SocialLogin;
