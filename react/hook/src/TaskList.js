import { useState } from 'react';


export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ul className='list-unstyled '>
      {todos.map(todo => (
        <li key={todo.id} 
        className=''
        >
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
          
        <button className='bg-dark text-white' onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        <span className='text-white'>{todo.title} &nbsp;</span>
        
        <button className='bg-dark text-white' onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label className=' '>
     
      <span>{todoContent}</span>
      &nbsp;
      <button className='bg-dark text-white' onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}