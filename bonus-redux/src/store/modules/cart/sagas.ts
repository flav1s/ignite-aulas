import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { IState } from "../..";
import api from "../../../services/api";
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from "./actions";
import { ActionTypes } from "./types";

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

/*
  - dentro do saga não é possível utilizar o async, por isso, deve-se utilizar dos generators
    function* iAmGenerator()
  - takeLatest pega apenas a ultima requisição e chama a função
  - select serve para buscar informações do estado
  - put similar ao dispatch, ele dispara uma ação
*/

function* checkProductStock({ payload }: CheckProductStockRequest): any {
  const { product } = payload;
  const currentQuantity: number = yield select(
    (state: IState) =>
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
  );

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
]);
