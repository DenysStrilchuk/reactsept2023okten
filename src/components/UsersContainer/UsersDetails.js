import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services/usersService";
import {UserDetails} from "./UserDetails";

const UsersDetails = () => {
    const {state:{id}} = useLocation();

    const [userDetails, setUsersDetails] = useState(null);

    useEffect(() => {
        usersService.getById(id).then(({data}) => setUsersDetails(data))
    }, [id]);
    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
    );
};

export {UsersDetails};