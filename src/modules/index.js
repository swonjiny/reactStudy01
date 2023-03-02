import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import codegroup, { codeGroupSaga } from "./codegroup";
import codedetail, { codeDetailSaga } from "./codedetail";
import member, { memberSaga } from "./member";
import board, { boardSaga } from "./board";
import notice, { noticeSaga } from "./notice";
import item, { itemSaga } from "./item";
import coin, { coinSaga } from "./coin";
import useritem, { useritemSaga } from "./useritem";
import pds, { pdsSaga } from "./pds";

const rootReducer = combineReducers({
    auth,
    loading,
    codegroup,
    codedetail,
    member,
    board,
    notice,
    item,
    coin,
    useritem,
    pds,
});

export function* rootSaga() {
    yield all([
        authSaga(),
        codeGroupSaga(),
        codeDetailSaga(),
        memberSaga(),
        boardSaga(),
        noticeSaga(),
        itemSaga(),
        coinSaga(),
        useritemSaga(),
        pdsSaga(),
    ]);
}

export default rootReducer;
