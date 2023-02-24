import {useEffect} from "react";
import {Link} from "react-router-dom";

const CodeDetailModifyForm = ({ codeDetail, isLoading, onModify }) => {
    const [groupCodes, setGroupCodes] = useState([]);
    const [codeValue, setCodeValue] = useState("");
    const [codeName, setCodeName] = useState("");

    const handleChangeCodeName = e => {
        setCodeName(e.target.value)
    }
    useEffect(() => {
        if(codeDetail) {
            setCodeValue(codeDetail.codeValue);
            setCodeName(codeDetail.codeName);
        }
    }, [codeDetail]);
    const handleSubmit = e => {
        e.preventDefault();

        onModify(codeDetail.groupCode, codeValue, codeName)
    }

    return (
        <div align="center">
            <h2>코드 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeDetail && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td>그룹코드</td>
                            <td>
                                <select value={codeDetail.groupCode} disabled>
                                    {groupCodes.map((groupCode) => (
                                        <option value={groupCode.value} key={groupCode.value}>{groupCode.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>코드값</td>
                            <td>
                                <input type="text" value={codeValue} disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>코드명</td>
                            <td>
                                <input type="text" value={codeName} onChange={handleChangeCodeName} />
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit">수정</button>
                        <Link to={`/codedetail/read/${codeDetail.groupCode}/${codeDetail.codeValue}`}>취소</Link>
                    </div>
                </form>
            )}
        </div>
    )
}

export default CodeDetailModifyForm