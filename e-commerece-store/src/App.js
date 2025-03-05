import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to Rolex Watch Store</h2>
      <p>Your one-stop destination for premium Rolex watches.</p>
      <div className="image-gallery">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVFwNg4bXCzr_qq3_oTP1mBrxy6ZIBfCrmA&s" alt="Celebrity wearing Rolex" className="home-image" />
        <img src="https://www.bobswatches.com/rolex-blog/wp-content/uploads/2020/10/23d463b5-d732-4b19-8014-0642cf3eca34.jpg" alt="Model watch" className="home-image" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUewTH14G_KiswA4FNrNbzT0r01Q-5rP26Q&s" alt="Famous personality with Rolex" className="home-image" />
      </div>
    </div>
  );
};

const Register = ({ setUser }) => {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    setUser("Indira");
    navigate("/login");
  };
  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Enter Username" className="input-field" required />
        <input type="password" placeholder="Create Password" className="input-field" required />
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setUser("Indira");
    navigate("/home");
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" className="input-field" required />
        <input type="password" placeholder="Password" className="input-field" required />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

const Account = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/register");
  };
  return (
    <div className="container">
      <h2>Account Info</h2>
      <p>Welcome, {user ? user : "Guest"}!</p>
      {user && <button className="btn" onClick={handleLogout}>Logout</button>}
    </div>
  );
};

const ProductCatalog = () => {
  const products = [
    { id: 1, name: "Rolex Submariner", price: "$10,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0IjF0vvJCUj3fctBYO-KZ7MQDcENYUGFlA&s" },
    { id: 2, name: "Rolex Daytona", price: "$15,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNIPZXy8K2W49F6DTFDoOpiSp3HlLZPHQPw&s" },
    { id: 3, name: "Rolex Datejust", price: "$12,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXpgNXiy971cw9Gh5wuECY0l1B_vtCn1YQA&s" },
  ];
  return (
    <div className="container">
      <h2>Product Catalogue</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};



const App = () => {
  const [user, setUser] = useState(null);
  
  return (
    <Router>
      <nav className="navbar">
        {user ? (
          <>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/catalog" className="nav-link">Product Catalog</Link>
            <Link to="/account" className="nav-link">Account</Link>
          </>
        ) : (
          <Link to="/register" className="nav-link">Register</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/register" />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path="/catalog" element={<ProductCatalog />} />
        <Route path="/account" element={user ? <Account user={user} setUser={setUser} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;



