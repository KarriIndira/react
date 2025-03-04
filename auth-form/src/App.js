import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthApp from "./AuthApp";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthApp />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
