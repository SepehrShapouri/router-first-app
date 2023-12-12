import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <span>
        Check out your <Link to="/profile">Profile</Link> chief!
      </span>
    </div>
  );
}

export default Home;
