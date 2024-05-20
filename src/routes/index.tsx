import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import ProjectList from "../pages/project/List";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/project/list",
        element: <ProjectList />
    }
])

export default router;