import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      setMessage("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Registration successful! You can now log in.");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {message && <p className={`message ${message.includes("successful") ? "success" : "error"}`}>{message}</p>}
    </div>
  );
};

export default RegisterForm;