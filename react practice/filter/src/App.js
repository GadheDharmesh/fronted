import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [filterEmail, setFilterEmail] = useState('');
  const [filterName, setFilterName] = useState('');
  const [filterId, setFilterId] = useState('');

  const addTask = () => {
    if (name && email) {
      const newTask = { id, name, email };
      setTasks([...tasks, newTask]);
      setId(id + 1);
      setName('');
      setEmail('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newName, newEmail) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: newName, email: newEmail };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const filterTasks = () => {
    let filteredTasks = tasks;
    if (filterId) {
      filteredTasks = filteredTasks.filter((task) => task.id === parseInt(filterId));
    }
    if (filterName) {
      filteredTasks = filteredTasks.filter((task) =>
        task.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }
    if (filterEmail) {
      filteredTasks = filteredTasks.filter((task) =>
        task.email.toLowerCase().includes(filterEmail.toLowerCase())
      );
    }
    return filteredTasks;
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
        pattern=''
        required=''
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     </form>
      <button onClick={addTask}>Add Task</button>

      <h2>Filter</h2>
      <input
        type="text"
        placeholder="ID"
        value={filterId}
        onChange={(e) => setFilterId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={filterEmail}
        onChange={(e) => setFilterEmail(e.target.value)}
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
                <button onClick={() => editTask(task.id, 'New Name', 'New Email')}>Edit</button>
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