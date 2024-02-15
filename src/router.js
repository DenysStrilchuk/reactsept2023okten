import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {UserPostsPage} from "./pages/UserPostsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {CommentsPage} from "./pages/CommentsPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<ErrorPage/>, children: [
            {
                index:true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>, children: [
                    {
                        path:'user', element:<UserDetailsPage/>, children: [
                            {
                                path:'posts', element:<UserPostsPage/>, children: [
                                    {
                                        path:'post', element:<PostDetailsPage/>, children : [
                                            {
                                                path:'comments', element:<CommentsPage/>
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

export {
    router
}