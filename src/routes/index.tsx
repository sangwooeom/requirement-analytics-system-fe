import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login";
import RequirementList from "@/pages/requirement/List";
import RequirementDetail from "@/pages/requirement/Detail";
import Main from '@/pages/main';
import App from "@/App";
import ProjectEdit from "@/pages/project/edit";
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
                        path: '/requirement/list',
                        element: <RequirementList />
                    },
                    {
                        path: '/requirement/detail',
                        element: <RequirementDetail />
                    },
                    {
                        path: '/project/edit',
                        element: <ProjectEdit />
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