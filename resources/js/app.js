import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from './store';
import routes from './routes';

const App = (
    <Provider store={ store }>
        <BrowserRouter>
            <Switch>
                { routes.map( ( route, idx ) =>
                    <Route key={ idx } { ...route } />
                )}
            </Switch>
        </BrowserRouter>
    </Provider>
);

const $node = document.getElementById('main');
if ( $node ) {
    ReactDOM.render( App, $node );
}
