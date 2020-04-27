import { combineReducers } from "redux";

import { reducer as formReducer } from "redux-form";

const appReducers = combineReducers({
  form: formReducer
});

const AppReducer = (state, action) => {
  return appReducers(state, action);
};

export default AppReducer;
