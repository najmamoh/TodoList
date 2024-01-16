import './App.css'
import { useState } from "react";
import List from './List'
import {v4 as uuidv4} from "uuid"
const Form = ({todo,setodo,input,setinput}) =>{
//    const [Todlist,setTodoLis]=useState("")



const onInputChange =(e)=>{
setinput(e.target.value) 
}

 const onFormSupmit = (e) => {
e.preventDefault();
setodo([...todo,{id:uuidv4(),title:input, comleted:false}]);
setinput("");
 }
 
  return (
    <div>
    <form onSubmit={onFormSupmit}>
 <input
  type="text"
   value={input} 
   placeholder='Enter a Todo...' 
   className='task-input'
   onChange ={onInputChange}
   required
   />
   <button className='button-Add' type='submit' >Add</button>
    </form>
     
    </div>
  );
}

export default Form;
