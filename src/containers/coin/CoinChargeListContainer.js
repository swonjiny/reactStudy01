import CoinChargeList from "../../components/coin/CoinChargeList";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_CHARGE_LIST, fetchChargeList} from "../../modules/coin";
import {useEffect} from "react";

const CoinChargeListContainer = () => {
    const dispatch = useDispatch();

    const { chargeCoins, isLoading } = useSelector(({ coin, loading }) => ({
        chargeCoins: coin.chargeCoins,
        isLoading: loading[FETCH_CHARGE_LIST],
    }));

    useEffect(() => {
        dispatch(fetchChargeList());
    }, [dispatch]);
    return (
        <CoinChargeList isLoading={isLoading} chargeCoins={chargeCoins}/>
    )
}

export default CoinChargeListContainer