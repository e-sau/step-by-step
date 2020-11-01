import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const middlewaresList = [sagaMiddleware];
const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/** Логгер в консоль для разработки **/
if ( process.env.NODE_ENV === "development" ) {
    const { logger } = require( "redux-logger" );
    middlewaresList.push( logger );
}

/** Отдаем готовый Store  **/
export default composeEnhancers( applyMiddleware( ...middlewaresList ) )( createStore )( rootReducer );

/** Запускать обязательно после создания стора*/
sagaMiddleware.run( rootSaga );
