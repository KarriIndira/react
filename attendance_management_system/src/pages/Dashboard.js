import React, { useState, useEffect } from "react";
import "../styles/attendance.css";




export function AttendanceForm() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [attendanceList, setAttendanceList] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
  
    useEffect(() => {
      const storedAttendance = JSON.parse(localStorage.getItem("attendance")) || [];
      setAttendanceList(storedAttendance);
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let updatedList;
      if (editingIndex !== null) {
        updatedList = attendanceList.map((entry, index) =>
          index === editingIndex ? { name, date } : entry
        );
        setEditingIndex(null);
      } else {
        const newEntry = { name, date };
        updatedList = [...attendanceList, newEntry];
      }
      setAttendanceList(updatedList);
      localStorage.setItem("attendance", JSON.stringify(updatedList));
      setName("");
      setDate("");
    };
  
    const handleDelete = (index) => {
      const updatedList = attendanceList.filter((_, i) => i !== index);
      setAttendanceList(updatedList);
      localStorage.setItem("attendance", JSON.stringify(updatedList));
    };
  
    const handleEdit = (index) => {
      setName(attendanceList[index].name);
      setDate(attendanceList[index].date);
      setEditingIndex(index);
    };
  
    return (
      <div className="form-container">
        <h2>Mark Attendance</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <button type="submit">{editingIndex !== null ? "Update" : "Submit"}</button>
        </form>
        <h3>Attendance Records</h3>
        <ul>
          {attendanceList.map((entry, index) => (
            <li key={index}>
              {entry.name} - {entry.date}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  
  