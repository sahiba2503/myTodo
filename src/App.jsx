
import { useState } from 'react'  
const App = () => {
  const[todo, setTodo]= useState("");  
  const[task,setTask]=useState([]);
  function handleSubmit(e){
e.preventDefault();
setTask([...task,todo]);
setTodo("");
  }
  function deleteTask(indexToDelete) {
  const updatedTasks = [...task]; 
  updatedTasks.splice(indexToDelete, 1); 
  setTask(updatedTasks);
  
}
  return (

    <div>
      <h2>Todo Tasks : {todo}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)} />
        <button type = "submit" style={{background:"green",color:"white"}}>Create</button>
      </form>
 <ul>
  {task.map((name, index)=>(
    <div style={{display:'flex'}}>
    <li style={{listStyle:"none"}} key={index}>{name}</li>
    <button style={{marginLeft:"1rem",background:"red",color:"white"}} onClick={() => deleteTask(index)}>delete</button>
    </div>
  ))
}
 </ul>
    </div>
  )
}

export default App
