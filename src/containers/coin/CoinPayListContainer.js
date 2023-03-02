import CoinPayList from "../../components/coin/CoinPayList";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_PAY_LIST, fetchPayList} from "../../modules/coin";
import {useEffect} from "react";

const CoinPayListContainer = () => {
  const dispatch = useDispatch();

  const { payCoins, isLoading } = useSelector(({ coin, loading }) => ({
    payCoins: coin.payCoins,
    isLoading: loading[FETCH_PAY_LIST],
  }));

  useEffect(() => {
    dispatch(fetchPayList);
  }, [dispatch]);
  return (
      <CoinPayList isLoading={isLoading} payCoins={payCoins}/>
  )
}

export default CoinPayListContainer