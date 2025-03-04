import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task"
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={handleAddTask} style={{ padding: "10px" }}>Add Task</button>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginTop: "10px" }}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
