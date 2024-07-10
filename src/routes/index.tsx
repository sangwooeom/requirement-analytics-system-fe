import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import ProjectList from "../pages/project/List";
import RequirementList from "../pages/requirement/List";
import RequirementDetail from "../pages/requirement/Detail";
import Main from '@/pages/main';
import App from "../App";
import { PrivateRoute } from "@/pages";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/',
                        element: <Main />
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
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    }
])

export default router;