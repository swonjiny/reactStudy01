import CodeDetailRegisterForm from "../../components/codedetail/CodeDetailRegisterForm";
import {withRouter} from "react-router-dom";
import * as api from "../../lib/api";

const CodeDetailRegisterContainer = ({ history }) => {
    const onRegister = async (groupCode, codeValue, codeName) => {
        try {
            const response = await api.writeCodeDetail(groupCode, codeValue, codeName);
            history.push(`/codedetail/read/${response.data.groupCode}/${response.data.codeValue}`);
        }catch (e) {
            console.error(e)
        }
    }


  return (
      <div>
          <CodeDetailRegisterForm onRegister={onRegister}/>
      </div>
  )
}
export default withRouter(CodeDetailRegisterContainer);