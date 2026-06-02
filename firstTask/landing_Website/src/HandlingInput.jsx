import {useState} from 'react';
function HandlingInput(){
    const[name,setname]=useState("");
    function Handlesubmit(e){
        e.preventDefault();
        console.log(name);
    }
    return(
        <div>
            <form onSubmit={Handlesubmit}>
          { /* <input type="text" onChange={(n)=>setname(n.target.value)}*/}
            <input type="text" value={name} placeholder="Enter your Name"onChange={(n)=>setname(n.target.value)}/>
            <h1>{name}</h1>
            <button type="submit">
                SUBMIT
            </button>
            </form>
        </div>
    );}
export default HandlingInput;