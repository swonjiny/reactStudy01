import {withRouter} from "react-router-dom";
import NoticeRegisterForm from "../../components/notice/NoticeRegisterForm";
import {writeNotice} from "../../lib/api";

const NoticeRegisterContainer = ({history}) => {
    const onRegister = async (title, content) => {
        try {
            const response = await writeNotice(title, content);
            console.log("등록완료")
            history.push("/notice/read/" + response.data.noticeNo);
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <NoticeRegisterForm onRegister={onRegister}/>
    )
}

export default withRouter(NoticeRegisterContainer);