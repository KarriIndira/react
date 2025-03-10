import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    alert('Login successful!');
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" className="login-input" required />

        <label>Password</label>
        <input type="password" className="login-input" required />

        <button type="submit" className="login-btn">Login</button>
      </form>
      <p className="login-footer">Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default LoginPage;

