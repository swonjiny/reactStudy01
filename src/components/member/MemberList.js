import {Link} from "react-router-dom";

const MemberList = ({ members, isLoading }) => {
    return (
        <div align="center">
            <h2>회원 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && members && (
                <>
                    <Link to="/member/create">새로만들기</Link>
                    <table border="1">
                        <thead>
                        <tr>
                            <th align="center" width="60">번호</th>
                            <th align="center" width="80">아이디</th>
                            <th align="center" width="300">비밀번호</th>
                            <th align="center" width="100">사용자명</th>
                            <th align="center" width="100">직업</th>
                            <th align="center" width="180">등록일시</th>
                        </tr>
                        </thead>
                        <tbody>
                        { (!Array.isArray(members) || members.length === 0) && (
                            <tr>
                                <td colSpan="6">
                                    List is empty.
                                </td>
                            </tr>
                        )}
                        { members.length > 0 && members.map((member) => (
                            <tr key={member.userNo}>
                                <td align="center">{member.userNo}</td>
                                <td align="center">
                                    <Link to={`/member/read/${member.userNo}`}>
                                        {member.userId}
                                    </Link>
                                </td>
                                <td align="left">{member.userPw}</td>
                                <td align="center">{member.userName}</td>
                                <td align="center">{member.job}</td>
                                <td align="center">{member.regDate}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default MemberList