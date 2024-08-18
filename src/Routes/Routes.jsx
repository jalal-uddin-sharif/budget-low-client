import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Roots from "../Roots/Roots";

export const router = createBrowserRouter([{
    path: "/",
    element: <Roots/>,
    children: [
        {
            path: "/",
            element: <Home/>
        }
    ]
}])