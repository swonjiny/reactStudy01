import {useCallback, useState} from "react";
import {Link} from "react-router-dom";

const NoticeRegisterForm = ( { onRegister } ) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);

    const handleChangeContent = useCallback((e) => {
        setContent(e.target.value);
    }, []);

    const handleSubmit = useCallback((e) => {
            e.preventDefault();
            onRegister(title, content);
        },[title, content, onRegister]);

    return (
        <div align="center">
            <h2>공지사항 등록</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input type="text" value={title} onChange={handleChangeTitle} />
                        </td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>
                            <textarea
                                rows="5"
                                value={content}
                                onChange={handleChangeContent}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <button type="submit">등록</button>
                    <Link to="/notice">취소</Link>
                </div>
            </form>
        </div>
    )
}

export default NoticeRegisterForm