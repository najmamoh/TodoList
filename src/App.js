import './App.css';
import TodoList from "./List"
import { useState,useEffect } from 'react';
import Form from './Form';

function App() {
  const initialState=JSON.parse(localStorage.getItem("todo"))||[];
  const [input,setinput]=useState("")
  const [todo,setodo]=useState(initialState)

 
  useEffect(()=>{
   localStorage.setItem("todo",JSON.stringify(todo));
  },[todo]);
  return (
    <div className="Container">
       <div className="app-wrapper">
          <div>
   <h1>Todo List</h1>
 
<div>
  <Form input={input}
  setinput={setinput}
  todo={todo}
  setodo={setodo}/>
</div>

<div>
  <TodoList 
  todo={todo}
  setodo={setodo}/>
</div>
</div>

</div>
    </div>
  );
}

export default App;
