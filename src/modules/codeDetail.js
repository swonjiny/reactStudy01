import {createAction, handleAction} from "redux-actions";
import createRequestSaga from "../lib/createRequestSaga";
import {fetchCodeDetail, fetchCodeDetailList} from "../lib/api";
import { takeLatest } from "redux-saga/effects";

const initialState = {
    codeDetail: null,
    codeDetails: [],
    error: null,
}

export const FETCH_ONE = "codeDetail/FETCH_ONE";
const FETCH_ONE_SUCCESS = "codeDetail/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "codeDetail/FETCH_ONE_FAILURE";

export const FETCH_LIST = "codeDetail/FETCH_LIST";
const FETCH_LIST_SUCCESS = "codeDetail/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "codeDetail/FETCH_LIST_FAILURE";

export const fetchOne = createAction(FETCH_ONE, (groupCode, codeValue) => ({groupCode, codeValue}))
export const fetchList = createAction(FETCH_LIST)

const fetchOneSaga = createRequestSaga(FETCH_ONE, fetchCodeDetail)
const fetchListSaga = createRequestSaga(FETCH_LIST, fetchCodeDetailList);
export function* codeDetailSaga() {
    yield takeLatest(FETCH_ONE, fetchOneSaga);
    yield takeLatest(FETCH_LIST, fetchListSaga);
}
export function* codeDetailSaga() {
    yield takeLatest(FETCH_ONE, fetchOneSaga);
    yield takeLatest(FETCH_LIST, fetchListSaga);
}
const codeDetail = handleAction({
    [FETCH_ONE]: state => ({
        ...state,
        codeDetail: null,
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
        ...state,
        codeDetail: action.payload
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    }),
    [FETCH_LIST]: state => ({
        ...state,
        codeDetails: [],
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
        ...state,
        codeDetail: action.payload
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    }),
})