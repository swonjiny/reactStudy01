import {adminSetup} from "../lib/api";
import {withRouter} from "react-router-dom";
import AdminSetupForm from "../components/member/AdminSetupForm";
const AdminSetupContainer = ({hisotry}) => {
    const onRegister = async (userId, userName, userPw) => {
        try {
            await adminSetup(userId, userName, userPw)
            alert("등록이 완료되었습니다.")
            hisotry.push("/")
        } catch (e) {
            alert(e.response.data)
        }
    }

    return <AdminSetupForm onRegister={onRegister}/>
}

export default withRouter(AdminSetupContainer)