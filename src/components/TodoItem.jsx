function TodoItem(props)
{
const list= props.list
const setlist= props.setlist
function handledelete(deleteid)
{
   var temp=list.filter(function(item)
   {
    if(item.id===deleteid)
    {
        return false
    }
    else{
        return true
    }
   }
) 
setlist(temp)
}


    return(
    <div className=" flex justify-between">
        <p>{props.index+1} . {props.activity} </p>
        <button className="text-red-500" onClick={()=>{handledelete(props.id)}}>Delete</button>
    </div>)
}
export default TodoItem