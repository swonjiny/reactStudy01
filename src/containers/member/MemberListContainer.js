import MemberList from "../../components/member/MemberList";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_LIST, fetchList} from "../../modules/member";
import {useEffect} from "react";

const MemberListContainer = () => {
    const dispatch = useDispatch();

    const { members, isLoading } = useSelector((state) => ({
        members: state.member.members,
        isLoading: state.loading[FETCH_LIST],
    }));

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);
    return (
        <MemberList members={members} isLoading={isLoading} />
    )
}

export default MemberListContainer