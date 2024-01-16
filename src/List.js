import { useState } from 'react';
import './App.css'
const TodoList = ({todo,setodo}) =>{
    const[checked,setchecked]=useState(false)

    function Check(todos){
      setodo(todo.map((item)=>{
        if (item.id===todos.id) {
          return {...item,comleted:!item.comleted}
        }
        return item;
      }))
}
function Delete({id}) {
    setodo(todo.filter((todos)=>todos.id!== id));
}
  return (
    
    <div className='Lists'>
       {todo.map((todos)=>(
<li key={todo.id}>
<input
  type="text"
   value={todos.title} 
   placeholder='Enter a Todo...' 
   className= {todos.comleted?"green":"list"}
   onChange ={(e)=> e.preventDefault()}
   
   />
   <div className='allList'>
   <input checked={todos.comleted} onClick={()=>Check(todos)} className=' checkbox' type={'checkbox'}/>
    <button className='btn' onClick={()=>Delete(todos)}>Delete</button>
     {/* <button className='btn'>Update</button> */}
     </div>

 </li>
       ))}
    </div>
    

  );
}

export default TodoList;
