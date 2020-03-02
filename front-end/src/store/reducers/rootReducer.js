import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";

const RootReducer = combineReducers({
  layout: layoutReducer
});

export default RootReducer;
