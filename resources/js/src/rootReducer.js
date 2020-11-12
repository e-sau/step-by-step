import { combineReducers } from "redux";
import testReducer from "./domains/__example__/reducer";
import authReducer from "./domains/auth/reducer";
import gradesReducer from "./domains/grade/reducer";
import subjectReducer from "./domains/subject/reducer";
import taskReducer from "./domains/task/reducer";

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
