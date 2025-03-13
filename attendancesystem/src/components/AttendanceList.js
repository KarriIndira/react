import React from "react";
import "./AttendanceList.css"; // Import CSS for styling

const AttendanceList = ({ employees, setEmployees }) => {
  const toggleAttendance = (index) => {
    const updatedEmployees = employees.map((employee, i) =>
      i === index
        ? { ...employee, status: employee.status === "Present" ? "Absent" : "Present" }
        : employee
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div className="attendance-container">
      <h2>Attendance List</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Attendance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.employeeId}</td>
              <td>{employee.name}</td>
              <td className={employee.status === "Present" ? "present" : "absent"}>
                {employee.status}
              </td>
              <td>
                <button
                  className={`toggle-btn ${employee.status === "Present" ? "present-btn" : "absent-btn"}`}
                  onClick={() => toggleAttendance(index)}
                >
                  {employee.status === "Present" ? "Mark Absent" : "Mark Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;
