import React from "react";
import { Link } from "react-router-dom";

const AuthApp = () => {
  return (
    <div>
      <h1>Welcome to the Authentication System</h1>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
    </div>
  );
};

export default AuthApp;
