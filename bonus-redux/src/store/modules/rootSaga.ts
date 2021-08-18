import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

export default function* rootSaga(): any {
  // generator (mais ou menos uma função assíncrona)
  return yield all([cart]); // yield => await
}
