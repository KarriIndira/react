import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import AttendanceList from "./components/AttendanceList";
import Reports from "./components/Reports";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("✅ App component loaded!");
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Register
          </NavLink>
          <NavLink to="/attendance-list" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Attendance
          </NavLink>
          <NavLink to="/reports" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Reports
          </NavLink>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register employees={employees} setEmployees={setEmployees} />} />
            <Route path="/attendance-list" element={<AttendanceList employees={employees} setEmployees={setEmployees} />} />
            <Route path="/reports" element={<Reports employees={employees} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

