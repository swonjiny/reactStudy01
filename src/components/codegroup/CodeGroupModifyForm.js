import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CodeGroupModifyForm({ codeGroup, isLoading, onModify,}) {
    const [groupName, setGroupName] = useState("");
    const handleChangeGroupName = (e) => {
        setGroupName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onModify(codeGroup.groupCode, groupName);
    };
    useEffect(()=>{
        if(codeGroup){
            setGroupName(codeGroup.groupName);
        }
    },[codeGroup])

    return (
        <div align="center">
            <h2>코드그룹 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeGroup && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td>코드그룹코드</td>
                            <td>
                                <input value={codeGroup.groupCode} type="text" disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>코드그룹명</td>
                            <td>
                                <input
                                    type="text"
                                    value={groupName}
                                    onChange={handleChangeGroupName}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit">수정</button>
                        <Link to={`/codegroup/read/${codeGroup.groupCode}`}>취소</Link>
                    </div>
                </form>
            )}
        </div>
    )
}

export default CodeGroupModifyForm