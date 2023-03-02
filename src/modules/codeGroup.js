import {createAction, handleActions} from "redux-actions";
import createRequestSaga from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";

const initialState = {
    codeGroup: null,
    codeGroups: [],
    error: null,
};

export const FETCH_ONE = "codeGroup/FETCH_ONE";
const FETCH_ONE_SUCCESS = "codeGroup/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "codeGroup/FETCH_ONE_FAILURE";

export const FETCH_LIST = "codeGroup/FETCH_LIST";
const FETCH_LIST_SUCCESS = "codeGroup/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "codeGroup/FETCH_LIST_FAILURE";

export const fetchOne = createAction(FETCH_ONE, groupCode => groupCode)
export const fetchList = createAction(FETCH_LIST)

const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchCodeGroup)
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchCodeGroupList)

export function* codeGroupSaga() {
    yield takeLatest(FETCH_ONE, fetchOneSaga);
    yield takeLatest(FETCH_LIST, fetchListSaga);
}

const codeGroup = handleActions(
    {
        [FETCH_ONE]: (state) => ({
            ...state,
            codeGroup: null,
        }),
        [FETCH_ONE_SUCCESS]: (state, action) => ({
            ...state,
            codeGroup: action.payload,
        }),
        [FETCH_ONE_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload,
        }),
        [FETCH_LIST]: (state) => ({
            ...state,
            codeGroups: [],
        }),
        [FETCH_LIST_SUCCESS]: (state, action) => ({
            ...state,
            codeGroups: action.payload,
        }),
        [FETCH_LIST_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload,
        }),
    },
    initialState
);

export default codeGroup;
