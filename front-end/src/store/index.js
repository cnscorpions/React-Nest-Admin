import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers/rootReducer";
import ReduxThunk from "redux-thunk";

// use redux devtool, redux-thunk middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
