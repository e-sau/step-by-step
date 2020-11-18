import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from './store';
import routes from './routes';
import SiteContainer from "./containers/SiteContainer";

/** @type JSX.Element корень приложения */
ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <SiteContainer>
                <Switch>
                    { routes.map( ( route, idx ) =>
                        <Route key={ idx } { ...route } />
                    )}
                </Switch>
            </SiteContainer>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('main')
);
