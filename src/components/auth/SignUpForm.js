import { useState, useCallback, useEffect } from "react";
import {fetchJobCodeList} from "../../lib/api";
import {Link} from "react-router-dom";
const SignUpForm = ({onSignUp}) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [job, setJob] = useState("00");
  const [jobCodes, setJobCodes] = useState([]);

  const handleChangeUserId = useCallback(e=> {
    setUserId(e.target.value)
  },[])

  const handleChangePassword = useCallback(e=> {
    setPassword(e.target.value)
  },[])

  const handleChangeUserName = useCallback(e=> {
    setUserName(e.target.value)
  },[])

  const handleChangeJob = useCallback(e=> {
    setJob(e.target.value)
  },[])

  const getJobCodeList = async () => {
    try {
      const response = await fetchJobCodeList();
      setJobCodes(response.data);
    } catch (e) {
      console.error(e)
      throw e;
    }
  };
  const handleSubmit = useCallback(e=> {
    e.preventDefault();
    onSignUp(userId, password, userName, job);
  },[userId, password, userName, job, onSignUp])

  useEffect(() => {
    getJobCodeList().then(res => {
      console.log('잡코드목록조회완료')
      return res;
    });
  }, []);
  return (
      <div align="center">
        <h2>회원가입</h2>
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
                      <option value={jobCode.value} key={jobCode.value} >{jobCode.label}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <button type="submit">회원가입</button>
              </td>
            </tr>
            </tbody>
          </table>
        </form>
        <p><Link to="/signin">로그인</Link></p>
      </div>
  )
}

export default SignUpForm