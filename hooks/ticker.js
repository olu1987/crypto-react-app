import { useState, useEffect } from 'react';
import axios from 'axios';
import tickerSdk from '../lib/sdks/ticker';

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
    const source = axios.CancelToken.source();
    tickerSdk.getList().then((data) => {
      if (!data.length) {
        return Promise.reject();
      }
      setTickerList(data);
      setLoading(false);
    }).catch((e) => {
      setError(true);
    });
    return () => {
      source.cancel('Cancelling in cleanup');
    };
  }, [requestCount]);
  return { tickerList, loading, error };
};
