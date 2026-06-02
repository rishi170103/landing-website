import{useEffect,useState}from 'react';
function Counter(){
    const[count,setCount]=useState(0);
    const[name,setName]=useState("");
    useEffect(()=>{console.log("count changed to ",count)},[count]);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>count:{count} </button>
            <button onClick={()=>setName("Rishi")}>Name:{name}</button>
        </div>
    );
}
   
export default Counter;