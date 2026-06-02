import{useState} from 'react';
// function conditionRender(){
//     const[IsLoggedIn,setIsLoggedIn]=useState(false);
//     return(
//         <div>
//             {IsLoggedIn?(<h1>welcome Rishi!</h1>):(<h1>please login</h1>)}
//             <button onClick={()=>setIsLoggedIn(!IsLoggedIn)}> Toggle </button>
//         </div>
//     )
// }
function showOrHide(){
    const[show,setShow]=useState(false);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>Toggle</button>
            {show&&<h1>Hello,Anbu</h1>}
        </div>
    )
}
// function Student_Marks(){
//     const[marks]=useState(89);
//     return(
//         <div>
//             {marks>=40?(<h1>pass</h1>):(<h1>Fail</h1>)}
//         </div>
//     )
// }
// export default conditionRender;
export default showOrHide;
//export default Student_Marks;