import { useState, useEffect } from 'react';
import axios from 'axios';
import tickerSdk from '../lib/sdks/ticker';
import currencyPairs from '../lib/constants/currency-pairs';

export default (requestInterval) => {
  const [ticker, setTicker] = useState([]);
  const [requestCount, setRequestCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCurrencyPair, setSelectedCurrencyPair] = useState(currencyPairs[0]);

  const getTicker = (currencyPair) => {
    const source = axios.CancelToken.source();
    setLoading(true);
    tickerSdk.get(currencyPair).then((data) => {
      setLoading(false);
      if (!data) {
        return Promise.reject();
      }
      setTicker(data);
      setLoading(false);
    }).catch((e) => {
      setError(true);
    });
    return () => {
      source.cancel('Cancelling in cleanup');
    };
  };
  useEffect(() => {
    setTimeout(() => {
      setRequestCount(requestCount + 1);
    }, requestInterval);
  });
  useEffect(() => getTicker(selectedCurrencyPair), [requestCount, selectedCurrencyPair]);
  return {
    ticker,
    loading,
    error,
    setSelectedCurrencyPair,
    selectedCurrencyPair,
  };
};
