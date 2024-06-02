import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  let [data, setData] = useState({});
  let apiDate = new Date().toISOString().split("T")[0];
  let apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${apiDate}/v1/currencies/${currency}.json`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
