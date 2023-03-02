import CodeGroupRegisterForm from "../../components/codegroup/CodeGroupRegisterForm";
import {withRouter} from "react-router-dom";
import {writeCodeGroup} from "../../lib/api";

const CodeGroupRegisterContainer = ({ history }) => {
    const onRegister = async (groupCode, groupName) => {
        try {
            const response = await writeCodeGroup(groupCode, groupName);
            alert("등록이 완료되었습니다.");
            history.push("/codegroup/read/" + response.data.groupCode);
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <div>
            <CodeGroupRegisterForm onRegister={onRegister}/>
        </div>
    )
}

export default withRouter(CodeGroupRegisterContainer)