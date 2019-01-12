import { useState, useEffect } from 'react';
import axios from 'axios';
import orderBookSdk from '../lib/sdks/order-book';
import currencyPairs from '../lib/constants/currency-pairs';
import safetyPercentages from '../containers/order-book-table/constants/safety-percentages';

export default (requestInterval) => {
  const [orderBookList, setOrderBookList] = useState([]);
  const [orderBookEstimator, setOrderBookEstimator] = useState([]);
  const [requestCount, setRequestCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedCurrencyPair, setSelectedCurrencyPair] = useState(currencyPairs[0]);
  const [selectedSafetyPercentage, setSelectedSafetyPercentage] = useState(safetyPercentages[0]);
  const [error, setError] = useState(false);

  const getEstimator = (currencyPair) => {
    const source = axios.CancelToken.source();
    setLoading(true);
    orderBookSdk.get(currencyPair).then((orderBook) => {
      if (!orderBook) {
        return Promise.reject();
      }
      setOrderBookEstimator([orderBook.getEstimator(selectedSafetyPercentage.value)]);
      setOrderBookList(orderBook);
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
  useEffect(() => getEstimator(selectedCurrencyPair), [requestCount, selectedCurrencyPair]);
  
  useEffect(() => {
    if (orderBookEstimator.length) {
      setOrderBookEstimator([orderBookList.getEstimator(selectedSafetyPercentage.value)]);
    }
  }, [selectedSafetyPercentage]);
  return {
    orderBookList,
    loading,
    selectedCurrencyPair,
    setSelectedCurrencyPair,
    orderBookEstimator,
    selectedSafetyPercentage,
    setSelectedSafetyPercentage,
    error,
    getEstimator,
  };
};