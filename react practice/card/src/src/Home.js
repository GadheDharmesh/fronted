import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Home() {

   const usersData =  useSelector(state => state.users)
   console.log(usersData);
  return (
    <div className=' container'>
        <h2 className='my-4'>User Data</h2>
        <Link to="/create" className='btn btn-primary my-4'>Add New (+)</Link>
        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>

                {usersData.map((items)=>(

<tr>
<td>{items.id}</td>
<td>{items.name}</td>
<td>{items.email}</td>
<td>
    <Link to={`/edit/${items.id}`} className='btn btn-success me-2'>Edit</Link>
    <button className='btn btn-danger'>Delete</button>
</td>
</tr>

                ))}
           
            </tbody>
        </table>


      
    </div>
  )
}

export default Home
