
import { useState } from 'react'  
const App = () => {
  const[todo, setTodo]= useState("");  
  const[task,setTask]=useState([]);
  const[update,setUpdate]= useState(null);
  const[completed,setCompleted]= useState([]);

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
function completedTask(index){
  const completedItem = task[index];  

  setCompleted([...completed, completedItem]);

  const updatedTasks = [...task];
  updatedTasks.splice(index, 1);
  setTask(updatedTasks);
}
function deleteCompletedTask(index){
  let allcompletedTask = [...completed];
  allcompletedTask.splice(index, 1);
  setCompleted(allcompletedTask);
}
function moveCompletedTask(index){
  let doneTask = [...completed];
  let addInNewTask = completed[index];
  setTask([...task,addInNewTask]);
  doneTask.splice(index,1);
  setCompleted(doneTask);
}
  return (

    <div style={{border:"2px solid black",background:"gray",margin:"10%"}} >
      <h2>Todo Tasks : {todo}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Enter your task'
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
    <button onClick={()=>completedTask(index)}>completed</button>
    </div>
  ))
}
 </ul>
 <h3  style={{color:"black"}} >Completed Tasks</h3>
 <ul>
  {completed.map((name, index)=>(
     
     <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
         <li style={{listStyle:"none"}} key={index}>{name} </li>
          <button style={{marginLeft:"1rem",background:"red",color:"white"}} onClick={() => deleteCompletedTask(index)}>delete</button>
          <button style={{marginLeft:"1rem",background:"yellow",color:"white"}} onClick={() => moveCompletedTask(index)}>moveBack</button>
  </div>
  ))}
 </ul>
    </div>
  )
}

export default App
