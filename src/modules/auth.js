import * as api from "../lib/api";
import {call,takeLatest,put} from "redux-saga/effects"
import {createActions, handleAction} from "redux-actions";
import client from "../lib/client";

const SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN";

const LOGIN = "auth/LOGIN";

export const setAccessToken = createActions(SET_ACCESS_TOKEN, (accessToken)=> accessToken)

export const login = createActions(LOGIN, ({ userId, password}) => ({userId, password}))

function* loginSaga(action) {
    try {
        const { userId, password } = action.payload
        const response = yield call(api.signIn(userId, password))
        const { authorization } = response.headers
        const accessToken = authorization

        yield put(setAccessToken(accessToken))

        client.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    }catch (e) {
        console.log(e)
    }
}


export function* authSaga(){
    yield takeLatest(LOGIN, loginSaga())
}

const initialState = {
    authorization: ""
}

const auth = handleAction(
    {
        [SET_ACCESS_TOKEN]: (state, action) => (
            {
                ...state,
                accessToken: action.payload
            }
        )
    },
    initialState
)

export default auth