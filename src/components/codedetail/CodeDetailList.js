import {Link} from "react-router-dom";

const CodeDetailList = ({ codeDetails, isLoading }) => {
    return (
        <div align="center">
            <h2>코드 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeDetails && (
                <>
                    <Link to="/codedetail/create" >새로만들기</Link>
                    <table border="1">
                        <thead>
                            <tr>
                                <th align="center" width="160">그룹코드</th>
                                <th align="center" width="160">코드값</th>
                                <th align="center" width="160">코드명</th>
                                <th align="center" width="160">정렬순서</th>
                                <th align="center" width="180">등록일시</th>
                            </tr>
                        </thead>
                        <tbody>
                        {!Array.isArray(codeDetails) && codeDetails.length===0 && (
                            <tr>
                                <td colSpan="5">
                                    List is empty.
                                </td>
                            </tr>
                        )}

                        {Array.isArray(codeDetails) && codeDetails.length>0 && (
                            <tr key={`${codeDetail.groupCode}${codeDetail.codeValue}`}>
                                <td align="center">{codeDetail.groupCode}</td>
                                <td align="center">{codeDetail.codeValue}</td>
                                <td align="left">
                                    <Link to={`/codedetail/read/${codeDetail.groupCode}/${codeDetail.codeValue}`}>
                                        {codeDetail.codeName}
                                    </Link>
                                </td>
                                <td align="center">{codeDetail.sortSeq}</td>
                                <td align="center">{codeDetail.regDate}</td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default CodeDetailList