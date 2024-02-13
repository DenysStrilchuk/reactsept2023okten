import {Outlet} from "react-router-dom";

import {Comments} from "../components/CommentsContainer/Comments";


const CommentsPage = () => {
    return (
        <div>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};