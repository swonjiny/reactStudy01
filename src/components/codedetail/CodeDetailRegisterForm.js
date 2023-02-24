import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
const CodeDetailRegisterForm = ({onRegister}) => {
    const [groupCode, setGroupCode] = useState("A01");
    const [groupCodes, setGroupCodes] = useState([]);
    const [codeValue, setCodeValue] = useState("");
    const [codeName, setCodeName] = useState("");

    const handleChangeGroupCode = useCallback(e=> {
        setGroupCodes(e.target.value)
    },[])

    const handleChangeCodeValue = useCallback((e) => {
        setCodeValue(e.target.value)
    }, []);

    const handleChangeCodeName = useCallback((e) => {
        setCodeName(e.target.value)
    }, [])

    const handleSubmit = useCallback(e => {
            e.preventDefault();
            onRegister(groupCode, codeValue, codeName);
        },
        [groupCode, codeValue, codeName, onRegister]
    );

  return (
      <div align="center">
          <h2>코드 등록</h2>
          <form onSubmit={handleSubmit}>
              <table>
                  <tbody>
                  <tr>
                      <td>그룹코드</td>
                      <td>
                          <select onChange={handleChangeGroupCode} value={groupCode}>
                              {groupCodes.map((groupCode) => (
                                  <option value={groupCode.value} key={groupCode.value}>{groupCode.label}</option>
                              ))}
                          </select>
                      </td>
                  </tr>
                  <tr>
                      <td>코드값</td>
                      <td>
                          <input type="text" value={codeValue} onChange={handleChangeCodeValue} />
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
                  <button type="submit">등록</button>
                  <Link to="/codedetail">취소</Link>
              </div>
          </form>
      </div>
  )
}

export default CodeDetailRegisterForm