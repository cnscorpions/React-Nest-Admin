import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import authReducer from "./authReducer";

const RootReducer = combineReducers({
  layout: layoutReducer,
  auth: authReducer
});

export default RootReducer;
