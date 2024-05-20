import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import ProjectList from "../pages/project/List";
import App from "../App";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/project/list",
                element: <ProjectList />
            },
        ]
    }
])

export default router;