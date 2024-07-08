import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import ProjectList from "../pages/project/List";
import RequirementList from "../pages/requirement/List";
import RequirementDetail from "../pages/requirement/Detail";
import Main from "../pages/Main";
import App from "../App";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/project/list",
                element: <ProjectList />
            },
            {
                path: '/requirement/list',
                element: <RequirementList />
            },
            {
                path: '/requirement/detail',
                element: <RequirementDetail />
            }
        ]
    }
])

export default router;