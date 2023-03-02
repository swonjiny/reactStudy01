import {createAction, handleActions} from "redux-actions";
import createRequestSaga from "../lib/createRequestSaga";
import * as api from "../lib/api";
import { takeLatest } from "redux-saga/effects";

const initialState = {
    chargeCoins: [],
    payCoins: [],
    error: null,
};

export const FETCH_CHARGE_LIST = "coin/FETCH_CHARGE_LIST";
const FETCH_CHARGE_LIST_SUCCESS = "coin/FETCH_CHARGE_LIST_SUCCESS";
const FETCH_CHARGE_LIST_FAILURE = "coin/FETCH_CHARGE_LIST_FAILURE";

export const FETCH_PAY_LIST = "coin/FETCH_PAY_LIST";
const FETCH_PAY_LIST_SUCCESS = "coin/FETCH_PAY_LIST_SUCCESS";
const FETCH_PAY_LIST_FAILURE = "coin/FETCH_PAY_LIST_FAILURE";

export const fetchChargeList = createAction(FETCH_CHARGE_LIST);
export const fetchPayList = createAction(FETCH_PAY_LIST);

const fetchChargeListSaga = createRequestSaga(FETCH_CHARGE_LIST, api.fetchChargeCoinList);
const fetchPayListSaga = createRequestSaga(FETCH_PAY_LIST, api.fetchPayCoinList);
export function* coinSaga() {
    yield takeLatest(FETCH_CHARGE_LIST, fetchChargeListSaga);
    yield takeLatest(FETCH_PAY_LIST, fetchPayListSaga);
}
const coin = handleActions(
    {
        [FETCH_CHARGE_LIST]: (state) => ({
            ...state,
            chargeCoins: [],
        }),
        [FETCH_CHARGE_LIST_SUCCESS]: (state, action) => ({
            ...state,
            chargeCoins: action.payload,
        }),
        [FETCH_CHARGE_LIST_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload,
        }),
        [FETCH_PAY_LIST]: (state) => ({
            ...state,
            payCoins: [],
        }),
        [FETCH_PAY_LIST_SUCCESS]: (state, action) => ({
            ...state,
            payCoins: action.payload,
        }),
        [FETCH_PAY_LIST_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload,
        }),
    },
    initialState
);

export default coin;

