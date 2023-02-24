import {Link} from "react-router-dom";

const BoardList = ({ boards, isLoading, isMember }) => {
    return (
        <div align="center">
            <h2>게시판 목록</h2>
            {isLoading && "로딩관련된거 만들자"}
            {!isLoading && boards && (
                <>
                    {isMember && (
                        <Link to="/board/create">새로만들기</Link>
                    )}
                    <table>
                        <thead>
                        <tr>
                            <th align="center" width="80">번호</th>
                            <th align="center" width="320">제목</th>
                            <th align="center" width="100">작성자</th>
                            <th align="center" width="180">등록일시</th>
                        </tr>
                        </thead>
                        <tbody>
                        {boards.length === 0 && (
                            <tr>
                                <td colSpan="4">
                                    List is empty.
                                </td>
                            </tr>
                        )}
                        {boards.length > 0 && boards.map(board => (
                            <tr key={board.boardNo}>
                                <td align="center">{board.boardNo}</td>
                                <td align="left">
                                    <Link to={`/board/read/${board.boardNo}`}>
                                        {board.title}
                                    </Link>
                                </td>
                                <td align="right">{board.writer}</td>
                                <td align="center">{board.regDate}</td>
                            </tr>
                        )) }
                        </tbody>
                    </table>
                </>
            ) }
        </div>
    )
}

export default BoardList

