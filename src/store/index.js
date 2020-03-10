import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import RootReducer from "./reducers/rootReducer";
import ReduxThunk from "redux-thunk";

// persist state in redux
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

// use redux devtool, redux-thunk middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

let persistor = persistStore(store);

export { store, persistor };
