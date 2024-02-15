import {Outlet} from "react-router-dom";
import {Posts} from "../components/PostsContainer/Posts";

const UserPostsPage = () => {
    return (
        <div>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {UserPostsPage};