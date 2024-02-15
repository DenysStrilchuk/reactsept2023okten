import {Outlet} from "react-router-dom";
import {Posts} from "../components/PostsContainer/Posts";

const UserPostsTitlePage = () => {
    return (
        <div>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {UserPostsTitlePage};