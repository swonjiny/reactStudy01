import NoticeModifyForm from "../../components/notice/NoticeModifyForm";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { fetchOne, FETCH_ONE } from "../../modules/notice";
import {modifyNotice} from "../../lib/api";
import {useEffect} from "react";

const NoticeModifyContainer = ({ noticeNo, history }) => {
    const dispatch = useDispatch();
    const { notice, isLoading } = useSelector((state) => ({
        notice: state.notice.notice,
        isLoading: state.loading[FETCH_ONE],
    }));

    const onModify = async (noticeNo, title, content) => {
        try {
            await modifyNotice(noticeNo, title, content);
            alert("수정이 완료되었습니다.");
            history.push("/notice/read/" + noticeNo);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        dispatch(fetchOne(noticeNo));
    }, [dispatch, noticeNo]);

    return (
        <NoticeModifyForm notice={notice} isLoading={isLoading} onModify={onModify} />
    )
}

export default withRouter(NoticeModifyContainer);