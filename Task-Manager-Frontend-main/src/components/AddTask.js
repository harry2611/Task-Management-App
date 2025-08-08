import React, { useState } from 'react';
import { addTask } from '../api';

const AddTask = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(form);
    onAdd();
    setForm({ title: '', description: '', status: 'Pending' });
  };

  return (
    <div className="mt-4">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" className="form-control mb-2" value={form.title} onChange={handleChange} />
        <input name="description" placeholder="Description" className="form-control mb-2" value={form.description} onChange={handleChange} />
        <button className="btn btn-success">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
