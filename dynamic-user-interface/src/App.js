import React, { useState } from "react";
import "./App.css";

const groceries = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Carrot", price: 20 },
  { id: 4, name: "Milk", price: 50 },
];

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (username && password) {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("Registration successful! Please log in.");
      onRegister();
    } else {
      alert("Please enter valid details");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <div className="input-group">
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === username) {
      if (storedUser.password === password) {
        onLogin(true);
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("User not found. Please register first.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <div className="input-group">
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const GroceryStore = () => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const removeFromBasket = (index) => {
    const newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  const totalAmount = basket.reduce((total, item) => total + item.price, 0);

  return (
    <div className="store-container">
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Grocery Store</h1>
      <div className="grocery-list">
        {groceries.map((item) => (
          <div key={item.id} className="grocery-item">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => addToBasket(item)}>Add to Basket</button>
          </div>
        ))}
      </div>
      <h2>Basket:</h2>
      <ul className="basket-list">
        {basket.map((item, index) => (
          <li key={index} className="basket-item">
            {item.name} - ₹{item.price}
            <button onClick={() => removeFromBasket(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Amount: ₹{totalAmount}</h3>
    </div>
  );
};

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container">
      {isLoggedIn ? <GroceryStore /> : isRegistered ? <Login onLogin={setIsLoggedIn} /> : <Register onRegister={() => setIsRegistered(true)} />}
    </div>
  );
};

export default App;



