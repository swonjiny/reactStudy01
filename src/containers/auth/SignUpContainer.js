import SignUpForm from "../../components/auth/SignUpForm";
import {withRouter} from "react-router-dom";
import {signUp} from "../../lib/api";

const SignUpContainer = ({ history }) => {
    const onSignUp = async (userId, password, userName, job) => {
        try {
            await signUp(userId, userName, password, job);
            alert("회원가입이 완료되었습니다.");
            history.push("/signin");
        } catch (e) {
            console.error(e)
            // 알람 모달 컴포난트 만들자
            alert("회원가입실패")
            
        }
    }
    return (
        <div>
            <SignUpForm onSignUp={onSignUp}/>
        </div>
    )
}

export default withRouter(SignUpContainer);