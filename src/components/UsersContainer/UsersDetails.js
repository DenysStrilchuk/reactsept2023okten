import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const UsersDetails = () => {
    const {state:{id}} = useLocation();

    const [userDetails, setUsersDetails] = useState(null);

    useEffect(() => {

    }, []);
    return (
        <div>
            UserDetails
        </div>
    );
};

export {UsersDetails};