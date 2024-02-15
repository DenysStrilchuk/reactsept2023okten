import {useEffect, useState} from "react";
import {usersService} from "../../services/usersService";
import {User} from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       usersService.getAll().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            {users.map(user => <User  key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};