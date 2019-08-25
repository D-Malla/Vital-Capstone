import { createStore } from "redux";

import vitalReducer from "./reducers/vital.reducer";

const store = createStore(vitalReducer);

export default store;
