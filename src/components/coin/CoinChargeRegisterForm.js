import {useCallback, useState} from "react";
import {Link} from "react-router-dom";

const CoinChargeRegisterForm = ({ onRegister }) => {
    const [amount, setAmount] = useState("0")
    const handleChangeAmount = useCallback((e) => {
        setAmount(e.target.value)
    },[])

    const handleSubmit = useCallback(e=> {
        e.preventDefault()
        onRegister(amount)
    }, [amount, onRegister])
    return (
        <div align="center">
            <h2>코인 충전</h2>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>충전금액</td>
                        <td>
                            <input type="text" value={amount} onChange={handleChangeAmount} />
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit">충전하기</button>
                    <Link to="/coin/charge">충전내역</Link>
                </div>
            </form>
        </div>
    )
}

export default CoinChargeRegisterForm