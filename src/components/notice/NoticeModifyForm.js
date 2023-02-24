import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const NoticeModifyForm = ({ notice, isLoading, onModify,}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onModify(notice.noticeNo, title, content);
    };

    useEffect(() => {
        if(notice) {
            setTitle(notice.title);
            setContent(notice.content);
        }
    }, [notice]);

    return (
        <div align="center">
            <h2>공지사항 수정</h2>
            {isLoading && "로딩..."}
            {!isLoading && notice && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td>번호</td>
                            <td>
                                <input value={notice.noticeNo} type="text" disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>등록일시</td>
                            <td>
                                <input value={notice.regDate} type="text" disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={handleChangeTitle}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>
                              <textarea
                                  value={content}
                                  rows="5"
                                  onChange={handleChangeContent}
                              />
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit">수정</button>
                        <Link to={`/notice/read/${notice.noticeNo}`}>취소</Link>
                    </div>
                </form>
            )}
        </div>
    )

}

export default NoticeModifyForm