import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleUpdate = async (task) => {
    const updated = { ...task, status: task.status === "Pending" ? "Completed" : "Pending" };
    await updateTask(task.id, updated);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="mt-4">
      <h2>Task List</h2>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between">
            <div>
              <strong>{task.title}</strong> - {task.description} [{task.status}]
            </div>
            <div>
              <button className="btn btn-sm btn-primary me-2" onClick={() => handleUpdate(task)}>Toggle Status</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
