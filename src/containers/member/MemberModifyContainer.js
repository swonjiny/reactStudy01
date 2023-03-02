import MemberModifyForm from "../../components/member/MemberModifyForm";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_ONE, fetchOne} from "../../modules/member";
import {modifyMember} from "../../lib/api";
import {useEffect} from "react";

const MemberModifyContainer = ({ userNo, history }) => {
    const dispatch = useDispatch();
    const { member, isLoading } = useSelector((state) => ({
        member: state.member.member,
        isLoading: state.loading[FETCH_ONE],
    }));
    const onModify = async (userNo, payload) => {
        try {
            await modifyMember(userNo, payload);
            alert("수정이 완료되었습니다.");

            history.push("/member/read/" + userNo);
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        dispatch(fetchOne(userNo));
    }, [dispatch, userNo]);
    return (
        <MemberModifyForm member={member} isLoading={isLoading} onModify={onModify}/>
    )
}

export default withRouter(MemberModifyContainer)