import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import testReducer from "./domains/__example__/reducer";

const middlewaresList = [];
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/** Логгер в консоль для разработки **/
if ( process.env.NODE_ENV === `development` ) {
    const { logger } = require(`redux-logger`);
    middlewaresList.push( logger );
}

/** @type Object Можно вынести в ROOT reducer, пока что просто обьеденение редьюсеров  **/
const rootReducer = combineReducers({
    test: testReducer
});

/** Отдаем готовый Store  **/
export default composeEnhancers( applyMiddleware( ...middlewaresList ) )( createStore )( rootReducer );
