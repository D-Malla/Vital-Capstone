import { createStore } from "redux";
import { combineReducers } from "redux";
import vitalReducer from "./reducers/vital.reducer";
import quizReducer from "./reducers/quiz.reducer";

const rootReducer = combineReducers({ vitalReducer, quizReducer });

const store = createStore(rootReducer);

export default store;
