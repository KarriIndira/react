import React from "react";
import "./Reports.css";

const Reports = ({ employees }) => {
  console.log("✅ Reports component loaded!", employees);

  const downloadReport = () => {
    if (employees.length === 0) {
      alert("⚠️ No data available to download!");
      return;
    }

    const csvContent =
      "Employee ID,Name,Email,Attendance\n" +
      employees
        .map((emp) => `${emp.employeeId},${emp.name},${emp.email},${emp.status}`)
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "attendance_report.csv";
    link.click();
  };

  return (
    <div className="reports-container">
      <h2>Attendance Report</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <>
          <table className="reports-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.employeeId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td className={employee.status === "Present" ? "present" : "absent"}>
                    {employee.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="download-btn" onClick={downloadReport}>
            📥 Download Report
          </button>
        </>
      )}
    </div>
  );
};

export default Reports;
