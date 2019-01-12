import { useState, useEffect } from 'react';
import tickerSdk from '../lib/sdks/ticker';
import orderBookSdk from '../lib/sdks/order-book';
import currencyPairs from '../lib/constants/currency-pairs';
import safetyPercentages from '../containers/order-book-table/constants/safety-percentages';

export default (requestInterval) => {
  const [tickerList, setTickerList] = useState([]);
  const [requestCount, setRequestCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRequestCount(requestCount + 1);
    }, requestInterval);
  });
  useEffect(() => {
    tickerSdk.getList().then((data) => {
      if (!data.length) {
        return Promise.reject();
      }
      setTickerList(data);
      setLoading(false);
    }).catch((e) => {
      setError(true);
    });
  }, [requestCount]);
  return { tickerList, loading, error };
};