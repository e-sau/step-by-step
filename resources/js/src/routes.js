import React from "react";

export default [
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import("./components/indexPage" )),
  },
  {
    path: "/signup",
    exact: true,
    component: React.lazy(() => import("./containers/SignupPageContainer" )),
  },
  {
    path: "/account",
    exact: true,
    component: React.lazy(() => import("./containers/AccountPageContainer") ),
  },
  {
    path: "/tasks",
    exact: true,
    component: React.lazy(() => import("./components/notFoundPage") ),
  },

  /** @todo добавить новые маршруты */
  { component: React.lazy(() => import("./components/notFoundPage")) } /// этот роут всегда должен быть в конце
];
