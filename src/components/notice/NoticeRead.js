import {Link} from "react-router-dom";

const NoticeRead = ({ notice, isLoading,  noticeNo, onRemove, isAdmin}) => {
    return (
        <div align="center">
            <h2>공지사항 상세보기</h2>
            {isLoading && "로딩...."}
            {!isLoading && notice && (
                <>
                    <table>
                        <tbody>
                        <tr>
                            <td>번호</td>
                            <td>
                                <input type="text" value={notice.noticeNo} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>등록일시</td>
                            <td>
                                <input type="text" value={notice.regDate} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input type="text" value={notice.title} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>
                                <textarea value={notice.content} readOnly></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    {isAdmin && (
                        <>
                            <Link to={`/notice/edit/${noticeNo}`}>편집</Link>
                            <button onClick={()=>onRemove()}>삭제</button>
                        </>
                    )}
                    <Link to="/notice">목록</Link>
                </>
            )}
        </div>
    )
}

export default NoticeRead