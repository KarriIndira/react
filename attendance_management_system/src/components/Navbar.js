import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Login</Link>
      <Link to="/signup" style={{ margin: "10px", color: "white" }}>Sign Up</Link>
      <Link to="/dashboard" style={{ margin: "10px", color: "white" }}>Dashboard</Link>
      <Link to="/attendance" style={{ margin: "10px", color: "white" }}>Attendance</Link>
    </nav>
  );
};

export default Navbar;