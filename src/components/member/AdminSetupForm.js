import React, { useState, useCallback } from "react";

function AdminSetupForm({onRegister}){
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUserId = useCallback((e)=>{
        setUserId(e.target.value)
    },[]);
    const handleChangePassword = useCallback((e)=>{
        setPassword(e.target.value)
    },[]);
    const handleChangeUserName = useCallback((e)=>{
        setUserName(e.target.value)
    },[]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        onRegister(userId, userName, password)
    },[userId, userName, password, onRegister])
    
    return (
        <div align="center">
            <h2>최초관리자 등록</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>관리자아이디</td>
                        <td>
                            <input type="text" value={userId} onChange={handleChangeUserId} />
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td>
                            <input type="text" value={password} onChange={handleChangePassword} />
                        </td>
                    </tr>
                    <tr>
                        <td>관리자명</td>
                        <td>
                            <input type="text" value={userName} onChange={handleChangeUserName} />
                        </td>
                    </tr>
                </table>
                <div>
                    <button type="submit">등록</button>
                </div>
            </form>
        </div>
    )
}

export default AdminSetupForm