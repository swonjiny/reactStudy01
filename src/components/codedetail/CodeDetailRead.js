import {Link} from "react-router-dom";

const CodeDetailRead = ({ codeDetail, isLoading, groupCode, codeValue, onRemove }) => {
    return (
        <div align="center">
            <h2>코드 상세보기</h2>
            {isLoading && (<div>로딩컴포넌트예정</div>)}
            {!isLoading && codeDetail && (
                <>
                    <table>
                        <tbody>
                        <tr>
                            <td>그룹코드</td>
                            <td>
                                <select value={codeDetail.groupCode} readOnly>
                                    {groupCodes.map((groupCode) => (
                                        <option value={groupCode.value} key={groupCode.value}>{groupCode.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>코드값</td>
                            <td>
                                <input type="text" value={codeDetail.codeValue} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>코드명</td>
                            <td>
                                <input type="text" value={codeDetail.codeName} readOnly />
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <Link to={`/codedetail/edit/${groupCode}/${codeValue}`}>편집</Link>
                    <button onClick={onRemove}>삭제</button>
                    <Link to="/codeDetail">목록</Link>
                </>
            )}
        </div>
    )
}

export default CodeDetailRead