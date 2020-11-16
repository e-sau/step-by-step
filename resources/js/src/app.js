import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from './store';
import routes from './routes';
import SiteContainer from "./containers/SiteContainer";

/** @type JSX.Element корень приложения */
ReactDOM.render(
    <Suspense fallback={ "loading" }>
        <Provider store={ store }>
            <SiteContainer>
                <BrowserRouter>
                    <Switch>
                        { routes.map( ( route, idx ) =>
                            <Route key={ idx } { ...route } />
                        )}
                    </Switch>
                </BrowserRouter>
            </SiteContainer>
        </Provider>
    </Suspense>
    ,
    document.getElementById('main')
);
