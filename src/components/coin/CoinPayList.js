const CoinPayList = ({ payCoins, isLoading }) => {
  return (
      <div align="center">
        <h2>구매 내역</h2>
        {isLoading && "로딩중..."}
        {!isLoading && (!Array.isArray(payCoins) || payCoins.length === 0 ) && "데이터가 없습니다." }
        {!isLoading && (Array.isArray(payCoins) && payCoins.length > 0 ) && (
            <>
              <table border="1">
                <thead>
                <tr>
                  <th align="center" width="80">번호</th>
                  <th align="center" width="120">공개자료명</th>
                  <th align="center" width="120">구매금액</th>
                  <th align="center" width="180">등록일시</th>
                </tr>
                </thead>
                <tbody>
                {!payCoins.length && (
                    <tr>
                      <td colSpan="4">
                        List is empty.
                      </td>
                    </tr>
                )}
                {!!payCoins.length && payCoins.map((payCoin) => (
                    <tr key={payCoin.historyNo}>
                      <td align="center">{payCoin.historyNo}</td>
                      <td align="left">{payCoin.itemName}</td>
                      <td align="left">{payCoin.amount}</td>
                      <td align="center">{payCoin.regDate}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </>
        )}
      </div>
  )
}

export default CoinPayList