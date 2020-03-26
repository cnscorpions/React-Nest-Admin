import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import layoutReducer from "./layoutReducer";
import authReducer from "./authReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    layout: layoutReducer,
    auth: authReducer
  });

export default createRootReducer;
