import {createAction, handleActions} from "redux-actions";
import createRequestSaga from "../lib/createRequestSaga";
import * as api from "../lib/api";

const initialState = {
    notice: null,
    notices: [],
    error: null,
};

export const FETCH_ONE = "notice/FETCH_ONE";
const FETCH_ONE_SUCCESS = "notice/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "notice/FETCH_ONE_FAILURE";

export const FETCH_LIST = "notice/FETCH_LIST";
const FETCH_LIST_SUCCESS = "notice/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "notice/FETCH_LIST_FAILURE";

export const fetchOne = createAction(FETCH_ONE, (noticeNo) => noticeNo);
export const fetchList = createAction(FETCH_LIST);
const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchNotice);
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchNoticeList);
export function* noticeSaga() {
    yield takeLatest(FETCH_ONE, fetchOneSaga);
    yield takeLatest(FETCH_LIST, fetchListSaga);
}

const notice = handleActions(
    {
        [FETCH_ONE]: (state) => ({
            ...state,
            notice: null,
        }),
        [FETCH_ONE_SUCCESS]: (state, action) => ({
            ...state,
            notice: action.payload,
        }),
        [FETCH_ONE_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload,
        }),
        [FETCH_LIST]: (state) => ({
            ...state,
            notices: [],
        }),
        [FETCH_LIST_SUCCESS]: (state, action) => ({
            ...state,
            notices: action.payload,
        }),
        [FETCH_LIST_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload,
        }),
    },
    initialState
);

export default notice;