import BoardRegisterForm from "../../components/board/BoardRegisterForm";
import * as api from "../../lib/api";
import {withRouter} from "react-router-dom";
const BoardRegisterContainer = ({ history }) => {
    const onRegister = async (title, content) => {
        try {
            const response = await api.writeBoard(title, content);
            history.push("/board/read/" + response.data.boardNo);
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <BoardRegisterForm onRegister={onRegister}/>
    )
}

export default withRouter(BoardRegisterContainer);
