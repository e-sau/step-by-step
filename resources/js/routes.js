import { PageNotFound } from './components/PageNotFound';
import ExampleContainer from './containers/Example';

export default [
    { path: '/', exact: true, component: ExampleContainer },
    { component: PageNotFound }
]
