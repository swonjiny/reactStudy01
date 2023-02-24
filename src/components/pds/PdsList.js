const PdsList = ({ pdsItems, isLoading, isAdmin }) => {
    return (
        <div align="center">
            <h2>공개자료실 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && pdsItems && (
                <>
                    {isAdmin && (
                        <Link to="/pds/create">새로만들기</Link>
                    )}
                    <table border="1">
                        <thead>
                        <tr>
                            <th align="center" width="80">자료번호</th>
                            <th align="center" width="320">자료명</th>
                            <th align="center" width="100">조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        { (Array.isArray(pdsItems) || pdsItems.length === 0) && (
                            <tr>
                                <td colSpan="3">
                                    List is empty.
                                </td>
                            </tr>
                        )}
                        {pdsItems.length>0 && pdsItems.map((pdsItem) => (
                            <tr key={pdsItem.itemId}>
                                <td align="center">{pdsItem.itemId}</td>
                                <td align="left">
                                    <Link to={`/pds/read/${pdsItem.itemId}`}>
                                        {pdsItem.itemName}
                                    </Link>
                                </td>
                                <td align="right">{pdsItem.viewCnt}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}
export default PdsList