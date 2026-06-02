import {useState} from 'react';
function showDetail(){
    const[show,setShow]=useState(true);
    return(
        <div>

            {show&&<h1>Rishi</h1>}
            {show&&<h1>Age:21</h1>}
            <button onClick={()=>setShow(!show)}>Toggle</button>
        </div>
    )
}
export default showDetail;