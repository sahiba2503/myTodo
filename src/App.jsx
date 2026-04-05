
import { useState } from 'react'  
const App = () => {
  const[todo, setTodo]= useState("");  
  const[task,setTask]=useState([]);
  const[update,setUpdate]= useState(null);

  function handleSubmit(e){
e.preventDefault();
if(todo.trim() === "")
  {
    return;
  }
if(update === null){
setTask([...task,todo]);
// setTodo("");
  }
  
  else{
   let upTask= [...task];
   upTask[update] = todo;
   setTask(upTask);
   setUpdate(null);

  }
  setTodo("");
}
  function deleteTask(indexToDelete) {
  const updatedTasks = [...task]; 
  updatedTasks.splice(indexToDelete, 1); 
  setTask(updatedTasks);
  
}
function updateTask(index) {
setTodo(task[index]);
setUpdate(index);
} 
  return (

    <div >
      <h2>Todo Tasks : {todo}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)} />
        <button type = "submit" style={{background:"green",color:"white"}}>Create</button>
      </form>
 <ul >
  {task.map((name, index)=>(
    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
    <li style={{listStyle:"none"}} key={index}>{name}</li>
    <button style={{marginLeft:"1rem",background:"red",color:"white"}} onClick={() => deleteTask(index)}>delete</button>
    <button onClick={()=>updateTask(index)}>update</button>
    </div>
  ))
}
 </ul>
    </div>
  )
}

export default App
