import {Outlet, useLocation} from "react-router-dom";
import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const {state:{id}} = useLocation();


    return (
        <div>
            <UserDetails/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};