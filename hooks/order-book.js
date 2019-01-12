import { useState, useEffect } from 'react';
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

  useEffect(() => {
    setTimeout(() => {
      setRequestCount(requestCount + 1);
    }, requestInterval);
  });
  useEffect(() => {
    setLoading(true);
    orderBookSdk.get(selectedCurrencyPair.value).then((orderBook) => {
      if (!orderBook) {
        return Promise.reject();
      }
      setOrderBookEstimator([orderBook.getEstimator(selectedSafetyPercentage.value)]);
      setOrderBookList(orderBook);
      setLoading(false);
    }).catch((e) => {
      setError(true);
    });
  }, [requestCount, selectedCurrencyPair]);
  
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
  };
};