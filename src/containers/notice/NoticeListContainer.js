import NoticeList from "../../components/notice/NoticeList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FETCH_LIST, fetchList} from "../../modules/notice";
import {isAdmin as selectIsAdmin} from "../../modules/selector";

const NoticeListContainer = () => {
    const dispatch = useDispatch();
    const { notices, isLoading, isAdmin } = useSelector((state) => ({
        notices: state.notice.notices,
        isLoading: state.loading[FETCH_LIST],
        isAdmin: selectIsAdmin(state),
    }));

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);
    return (
        <NoticeList notices={notices} isLoading={isLoading} isAdmin={isAdmin} />
    )
}

export default NoticeListContainer