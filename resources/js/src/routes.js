import React from "react";

export default [
    { path: "/", exact: true },
    {
        path: "/signup",
        exact: true,
        component: React.lazy(() => import("./containers/SignupPageContainer" )),
    },
    {
        path: "/login",
        exact: true,
        component:  React.lazy(() => import("./containers/LoginPageContainer") ),
    },
    {
        path: "/tasks",
        exact: true,
        component: React.lazy(() => import("./containers/TasksPageContainer") ),
    },

    /** @todo добавить новые маршруты */
    { component: React.lazy(() => import("./components/pageNotFound")) } /// этот роут всегда должен быть в конце
];
