import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <p>Welcome to your dashboard!</p>
      
      <p>
          back to <Link to="/profile">Profile</Link>
        </p>
        <p>
          <Link to="/">Home</Link>
        </p>
    </div>
  );
}

export default Dashboard;
