import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Roots from "../Roots/Roots";
import Login from "../authentication/Login";
import Register from "../authentication/Register";

export const router = createBrowserRouter([{
    path: "/",
    element: <Roots/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/login",
            element: <Login/>
        }
    ]
}])