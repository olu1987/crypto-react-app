import { useState, useEffect } from 'react';
import tickerSdk from '../lib/sdks/ticker';
import orderBookSdk from '../lib/sdks/order-book';
import currencyPairs from '../lib/constants/currency-pairs';
import safetyPercentages from '../containers/order-book-table/constants/safety-percentages';

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

export const useOrderBook = (requestInterval) => {
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

export default {
  useTicker,
  useOrderBook,
};
