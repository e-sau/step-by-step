import React from "react";

export default [
    {
        path: "/",
        exact: true,
        component: React.lazy(() => import("./pages/Main" )),
    },
    {
        path: "/signup",
        exact: true,
        component: React.lazy(() => import("./containers/SignupPageContainer" )),
    },
    {
        path: "/tasks",
        exact: true,
        component: React.lazy(() => import("./containers/TasksPageContainer") ),
    },

    /** @todo добавить новые маршруты */
    { component: React.lazy(() => import("./components/pageNotFound")) } /// этот роут всегда должен быть в конце
];
