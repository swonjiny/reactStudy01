import {useCallback, useState} from "react";
import {Link} from "react-router-dom";

const BoardRegisterForm = ({onRegister}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleChangeTitle = useCallback(e=>{
        setTitle(e.target.value)
    },[]);
    const handleChangeContent = useCallback(e => {
        setContent(e.target.value);
    }, []);
    const handleSubmit = useCallback(e=>{
        e.preventDefault()
        onRegister(title, content)
    },[title, content])

    return (
        <div align="center">
            <h2>게시판 등록</h2>
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
                                <textarea value={content} onChange={handleChangeTitle} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button type="submit">등록</button>
                    <Link to="/board">취소</Link>
                </div>
            </form>
        </div>
    )
}

export default BoardRegisterForm