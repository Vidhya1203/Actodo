
import Header from "./components/Header";
import Card from "./components/Card";
import Todocontainer from "./components/Todocontainer";
import Loginpage from "./pages/login";
import Signuppage from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";
import {BrowserRouter,Link, Route ,Routes} from 'react-router-dom'



function App()
{
  const [user,setuser]=useState([{
    username:"vidhya.m5",
  password:"Amutha@12"}])

  return(<BrowserRouter>
    <Routes>
      <Route path='/' element={<Loginpage user={user} setuser={setuser} />}></Route>
      <Route path='/signup' element={<Signuppage  user={user} setuser={setuser}/>}></Route>
    
      <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>)
}

 

export default App;
