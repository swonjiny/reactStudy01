import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/auth/SignInPage";
import AdminSetupPage from "./pages/member/AdminSetupPage";
import CodeDetailReadPage from "./pages/codedetail/CodeDetailReadPage";
import SignUpPage from "./pages/auth/SignUpPage";
import CodeGroupListPage from "./pages/codegroup/CodeGroupListPage";
import CodeGroupRegisterPage from "./pages/codegroup/CodeGroupRegisterPage";
import CodeGroupModifyPage from "./pages/codegroup/CodeGroupModifyPage";
import CodeGroupReadPage from "./pages/codegroup/CodeGroupReadPage";
import CodeDetailListPage from "./pages/codedetail/CodeDetailListPage";
import CodeDetailRegisterPage from "./pages/codedetail/CodeDetailRegisterPage";
import CodeDetailModifyPage from "./pages/codedetail/CodeDetailModifyPage";
import MemberListPage from "./pages/member/MemberListPage";
import MemberRegisterPage from "./pages/member/MemberRegisterPage";
import MemberModifyPage from "./pages/member/MemberModifyPage";
import MemberReadPage from "./pages/member/MemberReadPage";
import BoardListPage from "./pages/board/BoardListPage";
import BoardRegisterPage from "./pages/board/BoardRegisterPage";
import BoardModifyPage from "./pages/board/BoardModifyPage";
import BoardReadPage from "./pages/board/BoardReadPage";
import NoticeListPage from "./pages/notice/NoticeListPage";
import NoticeRegisterPage from "./pages/notice/NoticeRegisterPage";
import NoticeModifyPage from "./pages/notice/NoticeModifyPage";
import NoticeReadPage from "./pages/notice/NoticeReadPage";
import ItemListPage from "./pages/item/ItemListPage";
import ItemRegisterPage from "./pages/item/ItemRegisterPage";
import ItemModifyPage from "./pages/item/ItemModifyPage";
import ItemReadPage from "./pages/item/ItemReadPage";
import CoinChargeListPage from "./pages/coin/CoinChargeListPage";
import CoinChargeRegisterPage from "./pages/coin/CoinChargeRegisterPage";
import CoinPayListPage from "./pages/coin/CoinPayListPage";
import UserItemListPage from "./pages/useritem/UserItemListPage";
import UserItemReadPage from "./pages/useritem/UserItemReadPage";
import PdsListPage from "./pages/pds/PdsListPage";
import PdsRegisterPage from "./pages/pds/PdsRegisterPage";
import PdsModifyPage from "./pages/pds/PdsModifyPage";
import PdsReadPage from "./pages/pds/PdsReadPage";

function App() {
    return (
        <>
            <Route component={HomePage} path="/" exact />
            <Route component={SignInPage} path="/signin" exact />
            <Route component={SignUpPage} path="/signup" exact />
            <Route component={AdminSetupPage} path="/member/setup" />
            <Route component={CodeGroupListPage} path="/codegroup" exact />
            <Route component={CodeGroupRegisterPage} path="/codegroup/create" />
            <Route component={CodeGroupModifyPage} path="/codegroup/edit/:groupCode" />
            <Route component={CodeGroupReadPage} path="/codegroup/read/:groupCode" />
            <Route component={CodeDetailListPage} path="/codedetail" exact />
            <Route component={CodeDetailRegisterPage} path="/codedetail/create" />
            <Route component={CodeDetailModifyPage} path="/codedetail/edit/:groupCode/:codeValue" />
            <Route component={CodeDetailReadPage} path="/codedetail/read/:groupCode/:codeValue" />
            <Route component={MemberListPage} path="/member" exact />
            <Route component={MemberRegisterPage} path="/member/create" />
            <Route component={MemberModifyPage} path="/member/edit/:userNo" />
            <Route component={MemberReadPage} path="/member/read/:userNo" />
            <Route component={BoardListPage} path="/board" exact />
            <Route component={BoardRegisterPage} path="/board/create" />
            <Route component={BoardModifyPage} path="/board/edit/:boardNo" />
            <Route component={BoardReadPage} path="/board/read/:boardNo" />
            <Route component={NoticeListPage} path="/notice" exact />
            <Route component={NoticeRegisterPage} path="/notice/create" />
            <Route component={NoticeModifyPage} path="/notice/edit/:noticeNo" />
            <Route component={NoticeReadPage} path="/notice/read/:noticeNo" />
            <Route component={ItemListPage} path="/item" exact />
            <Route component={ItemRegisterPage} path="/item/create" />
            <Route component={ItemModifyPage} path="/item/edit/:itemId" />
            <Route component={ItemReadPage} path="/item/read/:itemId" />
            <Route component={CoinChargeListPage} path="/coin/charge" />
            <Route component={CoinChargeRegisterPage} path="/coin/create" />
            <Route component={CoinPayListPage} path="/coin/pay" />
            <Route component={UserItemListPage} path="/useritem" exact />
            <Route component={UserItemReadPage} path="/useritem/read/:userItemNo" />
            <Route component={PdsListPage} path="/pds" exact />
            <Route component={PdsRegisterPage} path="/pds/create" />
            <Route component={PdsModifyPage} path="/pds/edit/:itemId" />
            <Route component={PdsReadPage} path="/pds/read/:itemId" />
        </>
    );
}

export default App;
