import React, { useState } from "react";
import "./Register.css";

const Register = ({ employees, setEmployees }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  console.log("✅ Register component loaded!");

  const registerEmployee = () => {
    if (!name.trim() || !email.trim() || !employeeId.trim()) {
      alert("⚠️ All fields are required!");
      return;
    }

    setEmployees([...employees, { name, email, employeeId, status: "Absent" }]);
    setName("");
    setEmail("");
    setEmployeeId("");
    alert("🎉 Registered Successfully!");
  };

  return (
    <div className="register-container">
      <h2>Employee Registration</h2>
      <div className="register-form">
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <button onClick={registerEmployee}>Register Employee</button>
      </div>
    </div>
  );
};

export default Register;
