import React from "react";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div>
      {" "}
      <div>
        <p>Welcome to your Payments section!</p>
        <p>
          back to <Link to="/profile">Profile</Link>
        </p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
}

export default Payment;
