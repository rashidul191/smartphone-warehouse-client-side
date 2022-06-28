import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.inti';

const EmailVerification = () => {
    const [sendEmailVerification] = useSendEmailVerification(auth);
    return (
        <div className="container text-center w-50 mx-auto border border-2 border-info my-5 p-5">
      <h4 className="text-danger ">Your Email is not verify</h4>
      <h2 className="text-success">Please Verify you email</h2>
      <button
        className="btn btn-primary mt-md-4"
        onClick={async () => {
          await sendEmailVerification();
          toast("Sent email");
        }}
      >
        Send Verification again email
      </button>
      
    </div>
    );
};

export default EmailVerification;