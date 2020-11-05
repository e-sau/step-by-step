import { combineReducers } from "redux";
import testReducer from "./domains/__example__/reducer";
import authReducer from "./domains/auth/reducer";

export default combineReducers({
    test: testReducer,
    auth: authReducer
});
