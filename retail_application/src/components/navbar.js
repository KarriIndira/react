// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Ensure you create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">My Store</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
