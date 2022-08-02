import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div className="text-center my-5 py-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden py-5">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
