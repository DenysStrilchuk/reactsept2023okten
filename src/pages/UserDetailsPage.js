import {Outlet, useLocation} from "react-router-dom";

import {UsersDetails} from "../components/UsersContainer/UsersDetails";

const UserDetailsPage = () => {
    return (
        <div>
            <UsersDetails/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};