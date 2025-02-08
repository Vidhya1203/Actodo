
import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom"

function Landing() {
    const data=useLocation()

  return (
    
    <div className='bg-black  p-16'>
      <div className='bg-white p-10 border  rounded-md'>
        {/*header*/}
<Header name={data.state.user}/>
{/*card container section */}
<div className='flex  justify-between gap-7 my-5 flex-wrap'>
<Card  bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
<Card bgcolor={"#FD6663"} title={"February"} subtitle={"Time  18:15:08"}/>
<Card bgcolor={"#FCA230"} title={"Build using"} subtitle={"React"}/>


</div>
{/*todo*/}
<Todocontainer/>

</div>
    </div>
  );
}

export default Landing;
