import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const BoardModifyForm = ({ board, isLoading, onModify, myInfo }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const isOwn = myInfo.userId === board.writer

    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    const handleChangeContent = e => {
        setContent(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault()
        onModify(board.boardNo, title, content, board.writer)
    }

    useEffect(()=> {
        if(board) {
            setTitle(board.title)
            setContent(board.content)
        }
    }, [board])

    return (
        <div align="center">
            {isLoading && "로딩관련먼가붙이자"}
            {!isLoading && board && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>번호</td>
                                <td>
                                    <input value={board.boardNo} type="text" disabled />
                                </td>
                            </tr>
                            <tr>
                                <td>등록일시</td>
                                <td>
                                    <input value={board.regDate} type="text" disabled />
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
                                <td>작성자</td>
                                <td>
                                    <input type="text" value={board.writer} disabled />
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
                        {isOwn && (
                            <button type="submit">수정</button>
                        )}
                        <Link to={`/board/read/${board.boardNo}`}>취소</Link>
                    </div>
                </form>
            ) }
        </div>
    )
}

export default BoardModifyForm