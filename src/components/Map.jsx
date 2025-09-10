
function UserList (){
        const Users = ["Sneh", "Sharone","Arrey"];
        return(
            <ul>
            {Users.map((hey, index) =>(
                 <li key={index}>{hey}</li>
            ))

            }
            </ul>

    )
};

export default UserList