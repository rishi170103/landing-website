import{useState} from 'react';
function statusChecker(){
    const[status,setStatus]=useState(false);
    return(
        <div>
            <h1>status: {status ? "offline" : "online"}</h1>
            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}
export default statusChecker;