import {Link} from "react-router-dom";

const NoticeList = ({ notices, isLoading, isAdmin }) => {
    return (
        <div align="center">
            <h2>공지사항 목록</h2>
            {isLoading && "로딩중!!!"}
            {!isLoading && (
                <>
                    {isAdmin && (
                        <Link to="/notice/create">새로만들기</Link>
                    )}
                    <table border="1">
                        <thead>
                            <tr>
                                <th align="center" width="80">
                                    번호
                                </th>
                                <th align="center" width="320">
                                    제목
                                </th>
                                <th align="center" width="180">
                                    등록일시
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        { (!Array.isArray(notices) || notices.length === 0 ) && (
                            <tr>
                                <td colSpan="3">
                                    List is empty.
                                </td>
                            </tr>
                        ) }

                        {Array.isArray(notices) && notices.length > 0 && (
                            <tr key={notice.noticeNo}>
                                <td align="center">{notice.noticeNo}</td>
                                <td align="left">
                                    <Link to={`/notice/read/${notice.noticeNo}`}>
                                        {notice.title}
                                    </Link>
                                </td>
                                <td align="center">{notice.regDate}</td>
                            </tr>
                        ) }
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default NoticeList