import {Link} from "react-router-dom";

const BoardRead = ({ board, isLoading, boardNo, onRemove, myInfo }) => {

    const isOwn = myInfo.userId === board.writer
    const isAdmin = (myInfo && myInfo.authList[0].auth === "ROLE_ADMIN");

    return (
        <div align="center">
            <h2>게시판 상세보기</h2>
            {isLoading && "로딩."}
            {isLoading && board && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>번호</td>
                                <td>
                                    <input type="text" value={board.boardNo} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>등록일시</td>
                                <td>
                                    <input type="text" value={board.regDate} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>제목</td>
                                <td>
                                    <input type="text" value={board.title} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>작성자</td>
                                <td>
                                    <input type="text" value={board.writer} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>내용</td>
                                <td>
                                    <textarea value={board.content} readOnly></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {isOwn && (
                        <>
                            <Link to={`/board/edit/${boardNo}`}> 편집</Link>
                            <button onClick={onRemove}>삭제</button>
                        </>
                    )}
                    {isAdmin && (
                        <>
                            <button onClick={onRemove}>삭제</button>
                        </>
                    )}
                    <Link to="/board">목록</Link>
                </>
            )}
        </div>
    )
}

export default BoardRead