import MemberRead from "../../components/member/MemberRead";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_ONE, fetchOne} from "../../modules/member";
import {useEffect} from "react";
import {removeMember} from "../../lib/api";

const MemberReadContainer = ({userNo, history}) => {
    const dispatch = useDispatch();

    const { member, isLoading } = useSelector((state) => ({
        member: state.member.member,
        isLoading: state.loading[FETCH_ONE],
    }));

    useEffect(() => {
        dispatch(fetchOne(userNo));
    }, [dispatch, userNo]);

    const onRemove = async () => {
        try {
            await removeMember(userNo);
            alert("삭제가 완료되었습니다.");
            history.push("/member");
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <MemberRead member={member} isLoading={isLoading} userNo={userNo} onRemove={onRemove} />
    )
}

export default MemberReadContainer