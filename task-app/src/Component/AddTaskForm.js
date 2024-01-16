import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() === '') {
      alert('Task name cannot be empty');
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: taskName,
      dateAdded: new Date().toLocaleDateString(),
      completed: false,
    };

    onAdd(newTask);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;

