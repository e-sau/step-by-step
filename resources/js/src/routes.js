import { PageNotFound } from './components/PageNotFound';
import ExampleContainer from './containers/Example';

export default [
    { path: '/', exact: true, component: ExampleContainer },
    /** добавить новые маршруты здесь */
    { component: PageNotFound } /// этот роут всегда должен быть в конце
];
