import { useState, useEffect } from 'react';
import tickerSdk from '../lib/sdks/ticker';

export const useTicker = (requestInterval) => {
  const [tickerList, setTickerList] = useState([]);
  const [requestCount, setRequestCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRequestCount(requestCount + 1);
    }, requestInterval);
  });
  useEffect(() => {
    tickerSdk.getList().then((data) => {
      setTickerList(data);
      setLoading(false);
    });
  }, [requestCount]);
  return { tickerList, loading };
};

export default {
  useTicker,
};
