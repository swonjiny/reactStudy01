import {Link} from "react-router-dom";

const UserItemRead = ( {userItem, isLoading} ) => {
    const pictureUrl = () => {
        return (
            "/items/display?itemId=" + userItem.itemId + "&timestamp=" + new Date().getTime()
        );
    };

    return (
        <div align="center">
            <h2>구매공개자료 상세보기</h2>
            {isLoading && "로딩나중에 한꺼번에 처리"}
            {!isLoading && userItem && (
                <>
                    <table>
                        <tbody>
                        <tr>
                            <td>공개자료번호</td>
                            <td>
                                <input type="text" value={userItem.userItemNo} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>공개자료명</td>
                            <td>
                                <input type="text" value={userItem.itemName} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>공개자료가격</td>
                            <td>
                                <input type="text" value={userItem.price} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>공개자료파일</td>
                            <td>
                                <img src={pictureUrl()} alt="" width="200" />
                            </td>
                        </tr>
                        <tr>
                            <td>공개자료설명</td>
                            <td>
                                <textarea value={userItem.description} readOnly></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <Link to="/useritem">목록</Link>
                </>
            )}
        </div>
    );
}

export default UserItemRead;