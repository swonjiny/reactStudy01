import {Link} from "react-router-dom";

const PdsRead = ({ pdsItem, attachments, isLoading, itemId, onRemove, isAdmin}) => {
    const getOriginalName = (fileName) => {
        const idx = fileName.indexOf("_") + 1
        return fileName.substr(idx)
    };

    const downloadUrl = (fileName) => {
        return "http://localhost:8080/pds/download?fullName=" + fileName;
    };

    return (
        <div align="center">
            <h2>공개자료실 상세보기</h2>
            {isLoading && "로딩..."}
            {!isLoading && pdsItem && (
                <>
                    <table>
                        <tbody>
                        <tr>
                            <td>자료번호</td>
                            <td>
                                <input type="text" value={pdsItem.itemId} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>자료명</td>
                            <td>
                                <input type="text" value={pdsItem.itemName} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>파일</td>
                            <td>
                                <div>
                                    {attachments.map((attachment, index) => (
                                        <div key={index}><a href={downloadUrl(attachment)} download>{getOriginalName(attachment)}</a></div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>자료설명</td>
                            <td>
                                <textarea value={pdsItem.description} readOnly></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    {isAdmin && (
                        <>
                            <Link to={`/pds/edit/${itemId}`}>편집</Link>
                            <button onClick={onRemove}>삭제</button>
                        </>
                    )}
                    <Link to="/pds">목록</Link>
                </>
            )}
        </div>
    )
}

export default PdsRead