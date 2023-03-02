import CoinChargeRegisterForm from "../../components/coin/CoinChargeRegisterForm";
import {withRouter} from "react-router-dom";
import {chargeCoin} from "../../lib/api";

const CoinChargeRegisterContainer = ({ history }) => {
    const onRegister = async (amount) => {
        try {
            const response = await chargeCoin(amount);
            history.push("/coin/charge");
        } catch (e) {
            if (e.response.status === 400) {
                alert("잘못된 요청입니다.");
            } else if (e.response.status === 401) {
                alert("로그인이 필요합니다.");
                history.push("/signin");
            } else if (e.response.status === 403) {
                alert("접근 권한이 없습니다.");
                history.goBack();
            } else {
                alert(e.response.data.message);
            }
        }
    };
    return (
        <CoinChargeRegisterForm onRegister={onRegister()}/>
    )
}

export default withRouter(CoinChargeRegisterContainer)