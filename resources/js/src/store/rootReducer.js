import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import gradesReducer from "./grade/reducer";
import subjectReducer from "./subject/reducer";
import taskReducer from "./task/reducer";
import userReducer from "./user/reducer";
import siteReducer from "./site/reducer";
import reviewReducer from "./review/reducer";

/**
 * Подключение всех редьюсеров домена,
 * @todo тестовый удалить на релизе
 **/
export default combineReducers({
  site: siteReducer,
  auth: authReducer,
  user: userReducer,
  grade: gradesReducer,
  subject: subjectReducer,
  task: taskReducer,
  review: reviewReducer,
});
