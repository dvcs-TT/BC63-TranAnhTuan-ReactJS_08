import { combineReducers } from "redux";
import { reactFormReducer } from "./ReactForm/sliceReactForm";

export const rootReducer = combineReducers({
  reactFormReducer,
});
