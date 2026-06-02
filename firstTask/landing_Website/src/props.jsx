// function userCard({name, age, email}) {
//     return (
//         <div>
//             <h2>Name: {name}</h2>
//             <p>Age: {age}</p>
//             <p>Email: {email}</p>
//         </div>
//     );

function UserCard(props){
    return(
        <div>
            <h2>Name:{props.name}</h2>
            <p>Age: {props.age}</p>

        </div>
    )
}

export default UserCard;