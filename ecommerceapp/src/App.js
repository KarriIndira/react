import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';
import './Navbar.css';
import './LoginPage.css';
import './SignupPage.css';
import './ProductsPage.css';
import './CartPage.css';

// Sample Product Data
const sampleProducts = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

// Navigation Component
const Navbar = () => (
  <nav className="navbar">
    <div className="logo">E-Commerce App</div>
    <div className="nav-links">
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/payment">Payment</Link>
      <Link to="/login">Logout</Link>
    </div>
  </nav>
);

// Login Page
const LoginPage = () => (
  <div className="login-container">
    <div className="card">
      <h2>Login</h2>
      <input placeholder="Email" type="email" />
      <input placeholder="Password" type="password" />
      <button>Sign In</button>
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  </div>
);

// Signup Page
const SignupPage = () => (
  <div className="signup-container">
    <div className="card">
      <h2>Sign Up</h2>
      <input placeholder="Name" type="text" />
      <input placeholder="Email" type="email" />
      <input placeholder="Password" type="password" />
      <button>Register</button>
      <Link to="/login">Already have an account? Login</Link>
    </div>
  </div>
);

// Product Catalog Page
const ProductsPage = ({ addToCart }) => (
  <div className="products-container">
    <h2>Product Catalog</h2>
    <div className="product-grid">
      {sampleProducts.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);

// Cart Page
const CartPage = ({ cartItems }) => (
  <div className="cart-container">
    <h2>Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    )}
  </div>
);
// Payment Page
const PaymentPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
      setPaymentSuccess(true);
  };

  return (
      <div className="payment-container">
          {!paymentSuccess ? (
              <div className="payment-form">
                  <h2>Payment</h2>
                  <input type="text" placeholder="Card Number" />
                  <input type="text" placeholder="Card Holder Name" />
                  <input type="text" placeholder="Expiry Date" />
                  <input type="text" placeholder="CVV" />
                  <button onClick={handlePayment}>Pay Now</button>
              </div>
          ) : (
              <h2>Payment Successful! Thank you for your purchase.</h2>
          )}
      </div>
  );
};

// Main App
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        <Route path="/Payment" element={<PaymentPage/>}/>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

