import UserCard from './props.jsx';
function Map(){
    const users=[
        {id:1,name:"Rishi p",age:23},
        {id:2,name:"Anbu",age:26},
        {id:3,name:"kumar",age:21},
    ];
    return (
        <div>
            {users.map(user=>(
                <UserCard key={user.id} name={user.name} age={user.age}/>
            ))}
        </div>
    );
}
export default Map;
