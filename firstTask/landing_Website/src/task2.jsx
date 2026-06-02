import './App.css';
import{useState} from 'react';
function HandleSubmit()
{
    const[name,setname]=useState("");
    const[age,setage]=useState("");
    const[submittedData,setSubmittedData]=useState(null);
    function Submit(e)
    {
        e.preventDefault();
        console.log(name,age);
        setSubmittedData({name,age});
    }

    return(
        <div>
            <form onSubmit={Submit}>
            <label>Name:</label>
            <input type="text"value={name} onChange={(e)=>setname(e.target.value)}/>
            <br/>
            <label>Age:</label>
            <input type="number"value={age} onChange={(e)=>setage(e.target.value)}/>
            <br/>
            <button type="submit" className="button">
                SUBMIT
            </button>
            </form>
                {submittedData&&(
        <div>
            <p>Name: {submittedData.name}</p>
            <p>Age: {submittedData.age}</p>
        </div>
        )}

        </div>
    );

}
export default HandleSubmit;
