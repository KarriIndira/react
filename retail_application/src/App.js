import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpForm";
import LoginPage from "./components/LoginPage";
import CartPage from "./components/CartPage";
import PaymentPage from "./components/PaymentPage";
import Navbar from "./components/navbar";  // Import Navbar
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar /> {/* Navbar is now visible on all pages */}
      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/payment" element={<PaymentPage cart={cart} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;




