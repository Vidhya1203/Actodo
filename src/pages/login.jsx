import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Loginpage( props)
{

    const navigate= useNavigate()

    const[euser,seteuser]=useState("")
    const [epassword,setepassword]= useState("")
    const [registeruser,setregisteruser]=useState(true)


    const user=props.user
    
 function checkuser()
 {
    var userfound = false
    user.forEach(function(item){
        if(item.user=euser && item.password==epassword)
            {


            console.log("login success") 
            userfound = true

            navigate("/landing", {state:{user:euser}})
            }

            if(userfound==false)
            {
                console.log("failed")
                setregisteruser(false)
            }

    })
    setregisteruser(false)
 }


 function handleuserip(event){


    seteuser(event.target.value)
 }

  function handlepasswordip(event){


    setepassword(event.target.value)
 }
    return(<div>

<div className="bg-black p-10 ">

<div  className="bg-[#EFEFEF] p-10 border rounded">
<h1 className="text-3xl font-medium">Hey , Hi</h1>
<br></br>

{registeruser? <p>I help you to manage your activies after you login ;) </p>:<p className="text-red-400">Please Signup Before you login  </p> }

<div  className="flex flex-col gap-2 my-3">

<input type="text"   value={euser} onChange={handleuserip} className="w-52 border-black p-1 transparent border rounded-md" placeholder="Username"/>

<input type="text" value={epassword} onChange={ handlepasswordip}  className="w-52 border-black p-1 transparent border rounded-md" placeholder="Password"/>



<button  onClick={checkuser} className="bg-[#A020F0]  w-24 p-1 rounded-md"> Login </button>

<p>
    Don't have an account <Link to={"/signup"} className="underline">Signup</Link>
</p>
</div>

</div>



</div>
    </div>)
}

export default Loginpage