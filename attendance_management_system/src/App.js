import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import Dashboard from "./pages/Dashboard";
//import AttendanceForm from "./pages/AttendanceForm";
import { Dashboard } from "./pages/Dashboard";
import { AttendanceForm } from "./pages/AttendanceForm";
import "./styles/global.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<AttendanceForm />} />
      </Routes>
    </Router>
  );
}

export default App;

