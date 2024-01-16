import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="card mt-3">
      <ul className="list-group list-group-flush">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

