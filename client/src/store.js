import { createStore } from "redux"
import { combineReducers } from "redux"
import vitalReducer from "./reducers/vital.reducer"
import quizReducer from "./reducers/quiz.reducer"
import authReducer from "./reducers/auth.reducer"


const rootReducer = combineReducers({ vitalReducer, quizReducer, authReducer});

const store = createStore(rootReducer);

export default store;
