import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { ICartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; // interceptadores

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
); // store é o que vai estar disponível em toda a aplicação react

sagaMiddleware.run(rootSaga);

export default store;
