import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {PostsPage} from "./pages/PostsPage";

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
                path: 'users/:id', element: <UserDetailsPage/>, children: [
                    {
                        path: 'posts', element: <PostsPage/>
                    }
                ]
            },
            {
                path: 'posts/:id', element: <PostDetailsPage/>
            }
        ]
    }
])


export {
    router
}