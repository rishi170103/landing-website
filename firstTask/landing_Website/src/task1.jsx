import {useState} from 'react';
function LiveInput(){
    const[name,setName]=useState("");
    return(
        <div>
            <label>Enter Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>Hello,{name}</p>
        </div>
    );

}
export default LiveInput;