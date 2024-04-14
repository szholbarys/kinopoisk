import { createBrowserRouter } from "react-router-dom";
import { RootPage } from "../pages/Root/RootPage";
import { IndexPage } from "../pages/IndexPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootPage/>
    },
    {
        path: "/",
        element: <IndexPage/>
    }
])