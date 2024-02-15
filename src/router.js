import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage";
import {UsersPage} from "./pages/UsersPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<ErrorPage/>, children: [
            {
                index:true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>
            }
        ]
    }
])