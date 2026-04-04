
import { useState } from 'react'  
const App = () => {
  const[todo, setTodo]= useState("");  
  const[task,setTask]=useState([]);
  function handleSubmit(e){
e.preventDefault();
setTask([...task,todo]);
setTodo("");
  }
  return (

    <div>
      <h2>Todo Tasks : {todo}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)} />
        <button type = "submit" >Create</button>
      </form>
 <ul>
  {task.map((name, index)=>(
    <li key={index}>{name}</li>
  ))
}
 </ul>
    </div>
  )
}

export default App
