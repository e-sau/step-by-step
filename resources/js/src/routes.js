import { PageNotFound } from "./components/pageNotFound/PageNotFound";
import ExampleContainer from "./containers/Example";
import { SignupPage } from "./components/signupPage";

export default [
    { path: "/", exact: true, component: ExampleContainer },
    { path: "/signup", exact: true, component: SignupPage },

    /** @todo добавить новые маршруты */
    { component: PageNotFound } /// этот роут всегда должен быть в конце
];
