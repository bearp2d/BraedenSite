import {
  applyMiddleware as applyReduxMiddleware,
  createStore as createReduxStore
} from "redux";
import reducer from "./rootReducer";
import { composeWithDevTools as composeWithReduxDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import DataCache from "../dataCache";

const logger = store => next => action => {
  return next(action);
};

export const setupStore = () => {
  const middlewares = [];

  middlewares.push(
    reduxThunk.withExtraArgument({
      dataCache: new DataCache()
    })
  );

  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }

  return createReduxStore(
    reducer,
    composeWithReduxDevTools(applyReduxMiddleware(...middlewares))
  );
};

