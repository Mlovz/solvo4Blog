import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import articleReducer from "./reducers/articleReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  article: articleReducer,
});

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
