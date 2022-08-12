import { counterReducer } from "./reducers";
import { createStore } from "redux";
export const store = createStore(counterReducer);
