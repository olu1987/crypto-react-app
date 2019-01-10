import { useState, useEffect } from 'react';
import tickerSdk from '../lib/sdks/ticker';

export const useTicker = (requestInterval) => {
  const [tickerList, setTickerList] = useState([]);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setRequestCount(requestCount + 1);
    }, requestInterval);
  });
  useEffect(() => {
    console.log('update');
    tickerSdk.getList().then((data) => {
      setTickerList(data);
    });
  }, [requestCount]);
  return { tickerList };
}

export default {
  useTicker,
};
