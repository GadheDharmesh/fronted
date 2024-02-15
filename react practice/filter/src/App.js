import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [filter, setFilter] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  const addTask = () => {
    if (name && email) {
      if (isEditing) {
        // If editing, update the existing task
        const updatedTasks = tasks.map((task) =>
          task.id === editTaskId ? { ...task, name, email } : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setEditTaskId(null);
      } else {
        // If not editing, add a new task
        const newTask = { id, name, email };
        setTasks([...tasks, newTask]);
        setId(id + 1);
      }

      // Clear input fields
      setName('');
      setEmail('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const startEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setIsEditing(true);
      setEditTaskId(taskId);
      setName(taskToEdit.name);
      setEmail(taskToEdit.email);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditTaskId(null);
    setName('');
    setEmail('');
  };

  const filterTasks = () => {
    const lowerCaseFilter = filter.toLowerCase();
    return tasks.filter((task) =>
      String(task.id).includes(lowerCaseFilter) ||
      task.name.toLowerCase().includes(lowerCaseFilter) ||
      task.email.toLowerCase().includes(lowerCaseFilter)
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={addTask}>
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
        {isEditing && <button type="button" onClick={cancelEdit}>Cancel Edit</button>}
      </form>

      <h2>Filter</h2>
      <input
        type="text"
        placeholder="Filter by ID, Name, or Email"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterTasks().map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.email}</td>
              <td>
                <button onClick={() => startEditTask(task.id)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
