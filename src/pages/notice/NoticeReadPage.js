import MainLayout from "../../layout/MainLayout";
import NoticeReadContainer from "../../containers/notice/NoticeReadContainer";

const NoticeReadPage = ({ match }) => {
    const { noticeNo } = match.params;
    return (
        <MainLayout>
            <NoticeReadContainer noticeNo={noticeNo}/>
        </MainLayout>
    )
}

export default NoticeReadPage