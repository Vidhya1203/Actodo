import { useState } from "react"
function AddTodoform(props)
{

    const list= props.list
    const setlist=props.setlist  

    const [newactivity, setnewactivity]=useState("")


    function handlechange(event)
    {
setnewactivity(event.target.value)
    }

    function addActivity(){

        setlist([...list,{id:list.length+1, activity:newactivity}])
        setnewactivity([""])
    }
    return( 

    <div className="flex flex-col gap-3 ">
        <h1 className='font-medium text-2xl'>Manage  Activities</h1>
       
        <div>
        <input  value={newactivity} onChange={handlechange} type='text' placeholder=' Next Activity ?' className='border border-black rounded' ></input>
        <button onClick={addActivity}  className="bg-black text-white  p-1 border">Add</button>
        </div>
        </div>
       
        )
}

export default AddTodoform