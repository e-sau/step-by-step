import { combineReducers } from "redux";
import testReducer from "./__example__/reducer";
import authReducer from "./auth/reducer";
import gradesReducer from "./grade/reducer";
import subjectReducer from "./subject/reducer";
import taskReducer from "./task/reducer";

/**
 * Подключение всех редьюсеров домена,
 * @todo тестовый удалить на релизе
 **/
export default combineReducers({
    test: testReducer,
    auth: authReducer,
    grade: gradesReducer,
    subject: subjectReducer,
    task: taskReducer,
});
