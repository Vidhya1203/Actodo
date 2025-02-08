

import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signuppage(props)
{
    const user=props.user
    const setuser=props.setuser

  const navigate= useNavigate()

        const[euser,seteuser]=useState("")
        const [epassword,setepassword]= useState("")

        function handleuserip(event){

            seteuser(event.target.value)
        }  
        function handlepasswordip(event){

            setepassword(event.target.value)
        }
        function adduser()
        {

            setuser([...user,{username:euser, password:epassword}])
            navigate("/")
        }
    
    return(
    <div className="bg-black p-10 ">

        <div  className="bg-[#EFEFEF] p-10 border rounded">
        <h1 className="text-3xl font-medium">Hey , Hi</h1>
        <br></br>
        <p> Sign up Here ;) </p>
    
        <div  className="flex flex-col gap-2 my-3">

      <input type="text" onChange={handleuserip}  className="w-52 border-black p-1 transparent border rounded-md" placeholder="Username"/>

      <input type="text"  onChange={handlepasswordip} className="w-52 border-black p-1 transparent border rounded-md" placeholder="Password"/>

      <input type="text"   className="w-52 border-black p-1 transparent border rounded-md" placeholder="Confirm password"/>
        
        <button   onClick={adduser}  className="bg-[#FFA500]  w-24 p-1 rounded-md">Signup</button>

        <p>
            Already have an account? <Link to={"/"} className="underline">Login</Link>
        </p>
        </div>

        </div>


    
    </div>)
}

export default Signuppage