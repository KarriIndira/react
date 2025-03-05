import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <div className="container">
      <h2>Home Page</h2>
      <p>Welcome to our shopping platform!</p>
    </div>
  );
};

const Products = ({ addToCart }) => {
  const products = [
    { id: 1, name: "T-Shirt", price: "$20", image: "https://tse1.mm.bing.net/th?id=OIP.E9CymxpPQNi2ahoD-DZzCQHaHE&pid=Api&P=0&h=180" },
    { id: 2, name: "Jeans", price: "$40", image: "https://tse1.mm.bing.net/th?id=OIP.p7D2sWplCX_VfgETwOjh-gHaJ4&pid=Api&P=0&h=180" },
    { id: 3, name: "Shoes", price: "$50", image: "https://tse1.mm.bing.net/th?id=OIP.02aXXsFTFY-szO6B3WY-5QHaHa&pid=Api&P=0&h=180" },
  ];
  
  return (
    <div className="container">
      <h2>Products</h2>
      <p>Explore our latest fashion collections.</p>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <p>{product.name} - {product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <p>{item.name} - {item.price}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="container">
      <h2>Profile</h2>
      <p>Manage your account and orders.</p>
      <div className="profile-details">
        <h3>User Information</h3>
        <p><strong>Name:</strong> Indira</p>
        <p><strong>Email:</strong> Indira9@example.com</p>
        <p><strong>Phone:</strong> +91 2390967894</p>
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart ({cart.length})</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
