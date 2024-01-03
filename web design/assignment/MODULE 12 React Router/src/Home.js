import { useEffect, useState } from 'react';
function Home() {
  const [todos,setTodos] = useState();

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{return res.json()})
    .then((data)=>{
      setTodos(data)
    })
  })
  return (
    <div className='container '>
     <h2 className='my-2 bg-dark text-light'>User-Details</h2>
     <table className='table table-info'>
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>COMPLETED</th>
          </tr>
        </thead>
        <tbody>
        {
        todos && todos.map((todo)=>(
          <tr>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{(todo.completed) ? "Yes" : "No"}</td>
          </tr>
        ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default Home;
