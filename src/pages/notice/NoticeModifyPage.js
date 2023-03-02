import MainLayout from "../../layout/MainLayout";
import NoticeModifyContainer from "../../containers/notice/NoticeModifyContainer";

const NoticeModifyPage = ({ match }) => {
    const { noticeNo } = match.params;
    return (
        <MainLayout>
            <NoticeModifyContainer noticeNo={noticeNo}/>
        </MainLayout>
    )
}
export default NoticeModifyPage