import {useCallback, useState} from "react";
import {Link} from "react-router-dom";

const MemberRegisterForm = ({onRegister}) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [job, setJob] = useState("00");
    const [jobCodes, setJobCodes] = useState([]);

    const handleChangeUserId = useCallback((e) => {
        setUserId(e.target.value);
    }, []);

    const handleChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const handleChangeUserName = useCallback((e) => {
        setUserName(e.target.value);
    }, []);

    const handleChangeJob = useCallback((e) => {
        setJob(e.target.value);
    }, []);

    const handleSubmit = useCallback((e) => {
            e.preventDefault();
            onRegister(userId, userName, password, job);
        },[userId, userName, password, job, onRegister]);

    return (
        <div align="center">
            <h2>회원 등록</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>
                            <input
                                type="text"
                                value={userId}
                                onChange={handleChangeUserId}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td>
                            <input
                                type="password"
                                value={password}
                                onChange={handleChangePassword}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>사용자명</td>
                        <td>
                            <input
                                type="text"
                                value={userName}
                                onChange={handleChangeUserName}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>직업</td>
                        <td>
                            <select onChange={handleChangeJob} value={job}>
                                {jobCodes.map((jobCode) => (
                                    <option value={jobCode.value} key={jobCode.value}>{jobCode.label}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit">등록</button>
                    <Link to="/member">취소</Link>
                </div>
            </form>
        </div>
    )
}

export default MemberRegisterForm