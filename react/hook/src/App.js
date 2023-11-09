import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

 
let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Apple' },
  { id: 1, title: 'Mango'},
  { id: 2, title: 'Banana' },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
      }


    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id == nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <>
    
     <div className='container-fluid bg-primary text-center'>
     <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
     </div>
    </>
  );
}
