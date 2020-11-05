import { PageNotFound } from "./components/pageNotFound/PageNotFound";
import ExampleContainer from "./containers/Example";
import SignupPageContainer from "./containers/SignupPageContainer";
import LoginPageContainer from "./containers/LoginPageContainer";

export default [
    { path: "/", exact: true, component: null },
    { path: "/example", exact: true, component: ExampleContainer },
    { path: "/signup", exact: true, component: SignupPageContainer },
    { path: "/login", exact: true, component: LoginPageContainer },

    /** @todo добавить новые маршруты */
    { component: PageNotFound } /// этот роут всегда должен быть в конце
];
