import { useCallback } from "react";
import { Link } from "react-router-dom";
const UserItemRead = ( { userItems, isLoading, onDownload } ) => {
    const handleClickDownload = useCallback((userItemNo) => {
        onDownload(userItemNo);
    }, [onDownload]);

    return (
        <div align="center">
            <h2>구매공개자료 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && userItems && (
                <>
                    <table border="1">
                        <thead>
                        <tr>
                            <th align="center" width="80">번호</th>
                            <th align="center" width="100">공개자료명</th>
                            <th align="center" width="100">공개자료가격</th>
                            <th align="center" width="180">구매일시</th>
                            <th align="center" width="180">다운로드</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!Array.isArray(userItems) ||  userItems.length === 0 && (
                            <tr>
                                <td colSpan="5">
                                    List is empty.
                                </td>
                            </tr>
                        )}
                        {Array.isArray(userItems) && userItems.map((userItem) => (
                            <tr key={userItem.userItemNo}>
                                <td align="center">{userItem.userItemNo}</td>
                                <td align="left">
                                    <Link to={`/useritem/read/${userItem.userItemNo}`}>
                                        {userItem.itemName}
                                    </Link>
                                </td>
                                <td align="right">{userItem.price}</td>
                                <td align="center">{userItem.regDate}</td>
                                <td align="center"><span onClick={() => handleClickDownload(userItem.userItemNo)}>DOWNLOAD</span></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default UserItemRead