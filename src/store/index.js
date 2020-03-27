import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import createRootReducer from "./reducers/rootReducer";
import ReduxThunk from "redux-thunk";

export const history = createBrowserHistory();

// persist state in redux
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "layout"]
};

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

export default function configureStore() {
  const middlewares = [ReduxThunk, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // use redux devtool, redux-thunk middleware
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    connectRouter(history)(persistedReducer),
    composeEnhancers(...enhancers)
  );

  const persistor = persistStore(store);

  return { store, persistor };
}
