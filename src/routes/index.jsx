import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Template from "../pages/Templates";
import National from "../pages/National";

export const router = createBrowserRouter([
    { 
        path: "/",
        element: <Template />,
        children: [
            { path: "/", element: <App /> },
            { path: "/national", element: <National /> },
        ]
    },
]);