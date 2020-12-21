import React from "react";

export default [
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import("./containers/indexPageContainer" )),
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
    path: "/subjects/:slug?",
    exact: true,
    component: React.lazy(() => import("./containers/SubjectsPageContainer") ),
  },

  /** @todo добавить новые маршруты */
  { component: React.lazy(() => import("./pages/NotFoundPage")) } /// этот роут всегда должен быть в конце
];
