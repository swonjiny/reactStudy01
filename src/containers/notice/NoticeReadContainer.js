import {withRouter} from "react-router-dom";
import NoticeRead from "../../components/notice/NoticeRead";
import {isAdmin as selectIsAdmin} from "../../modules/selector";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_ONE, fetchOne} from "../../modules/notice";
import {useEffect} from "react";
import {removeNotice} from "../../lib/api";

const NoticeReadContainer = ({ noticeNo, history }) => {
    const dispatch = useDispatch();

    const { notice, isLoading, isAdmin } = useSelector((state) => ({
        notice: state.notice.notice,
        isLoading: state.loading[FETCH_ONE],
        isAdmin: selectIsAdmin(state),
    }));



    const onRemove = async () => {
        try {
            await removeNotice(noticeNo);
            alert("삭제가 완료되었습니다.");
            history.push("/notice");
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        dispatch(fetchOne(noticeNo));
    }, [dispatch, noticeNo]);

    return (
        <NoticeRead notice={} isLoading={} noticeNo={noticeNo} onRemove={} isAdmin={}/>
    )
}

export default withRouter(NoticeReadContainer)