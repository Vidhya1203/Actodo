
import { useState } from "react"
import TodoItem from "./TodoItem"
function ToDoList(props)
{  
    
   const list= props.list
 const setlist=props.setlist    
    
    
    return(
<div className='bg-[#BDB4EA] border rounded-md p-2 flex-grow '>
          <h1 className="text-2xl font-medium " >Today's Activities</h1>
     
     {list.length===0? <p>you haven't added anything yet </p>:""}    
            {
                list.map(function(item, index){
                    return(<TodoItem  id={item.id} activity={item.activity} index={index} list={list} setlist={setlist}></TodoItem>)
                })
            }
        
       
          
    </div>)
}
export default ToDoList 