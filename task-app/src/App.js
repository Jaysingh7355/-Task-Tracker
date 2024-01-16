import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './Component/TaskList';
import AddTaskForm from './Component/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Retrieve tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const toggleCompletion = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h1 className="mb-4">Task Tracker</h1>
        <AddTaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleCompletion} />
      </div>
    </div>
  );
};

export default App;


