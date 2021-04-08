import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import serviceListReducer from "../reducers/serviceList";
import serviceAddReducer from "../reducers/serviceAdd";
import serviceChooseReducer from "../reducers/serviceChoose";
import thunk from "redux-thunk";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceChoose: serviceChooseReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
