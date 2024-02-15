import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {UserPostsTitlePage} from "./pages/UserPostsTitlePage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {CommentsPage} from "./pages/CommentsPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<ErrorPage/>, children: [
            {
                index:true, element:<Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'userDetails', element: <UserDetailsPage/>, children: [
                    {
                        path: 'postsTitle', element: <UserPostsTitlePage/>
                    }
                ]
            },
            {
                path: 'post', element: <PostDetailsPage/>
            },
            {
                path:'comments', element:<CommentsPage/>
            }
        ]
    }
])


export {
    router
}