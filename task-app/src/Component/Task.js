import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`card mb-3 ${task.completed ? 'completed' : ''}`}>
      <div className="card-body">
        <h3 className="card-title">{task.name}</h3>
        <p className="card-text">Date Added: {task.dateAdded}</p>
        <button
          onClick={() => onDelete(task.id)}
          className="btn btn-danger me-2"
        >
          Delete
        </button>
        <button
          onClick={() => onToggle(task.id)}
          className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'}`}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default Task;

