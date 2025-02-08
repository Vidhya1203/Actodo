import AddTodoform from "./AddToDoform";
import { useState } from "react";
import ToDoList from "./ToDoList";


function Todocontainer()
{

   const[list,setlist]= useState([{
      id:1,
      activity:"Wakeup at 5ck"
  }
,{
  id:2,
  activity:"Drink Water"
}
,{
   id:3,
   activity:"Go for a walk"
}])
    return(
 <div>

    <div className="flex gap-5 flex-wrap ">
      <AddTodoform  list={list}  setlist={setlist}/>
       <ToDoList list={list}  setlist={setlist}/>
    </div>
      
 </div>)
} 

export default Todocontainer