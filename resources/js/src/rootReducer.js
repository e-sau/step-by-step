import { combineReducers } from "redux";
import testReducer from "./domains/__example__/reducer";
import authReducer from "./domains/auth/reducer";
import gradesReducer from "./domains/grades/reducer";

/**
 * Подключение всех редьюсеров домена,
 * @todo тестовый удалить на релизе
 **/
export default combineReducers({
    test: testReducer,
    auth: authReducer,
    grade: gradesReducer,
});
