import {withRouter} from "react-router-dom";
import MemberRegisterForm from "../../components/member/MemberRegisterForm";
import {writeMember} from "../../lib/api";

const MemberRegisterContainer = ({ history }) => {
    const onRegister = async (userId, userName, userPw, job) => {
        try {
            const response = await writeMember(userId, userName, userPw, job);
            alert("등록이 완료되었습니다.");
            history.push("/member/read/" + response.data.userNo);
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <MemberRegisterForm onRegister={onRegister} />
    )
}

export default withRouter(MemberRegisterContainer)