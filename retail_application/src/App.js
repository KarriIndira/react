import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpForm";
import LoginPage from "./components/LoginPage";
import CartPage from "./components/CartPage";
import PaymentPage from "./components/PaymentPage";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]); // Store cart items

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cart">Cart ({cart.length})</Link></li>
            <li><Link to="/payment">Payment</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/payment" element={<PaymentPage cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;





