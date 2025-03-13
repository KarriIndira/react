import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Welcome to the Employee Attendance System";
  const navigate = useNavigate();

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <h1 className="typing-text">{text}</h1>
      <p>Track employee attendance easily with our simple and efficient system.</p>
      <div className="button-group">
        <button className="nav-btn" onClick={() => navigate("/register")}>
          Register Employee
        </button>
        <button className="nav-btn" onClick={() => navigate("/attendance-list")}>
          View Attendance
        </button>
      </div>
    </div>
  );
};

export default Home;
