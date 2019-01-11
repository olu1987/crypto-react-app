import { useState, useEffect } from 'react';
import tickerSdk from '../lib/sdks/ticker';
import orderBookSdk from '../lib/sdks/order-book';

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
  const [requestCount, setRequestCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRequestCount(requestCount + 1);
    }, requestInterval);
  });
  useEffect(() => {
    orderBookSdk.get('btcusd').then((data) => {
      setOrderBookList(data);
      setLoading(false);
    });
  }, [requestCount]);
  return { orderBookList, loading };
};

export default {
  useTicker,
  useOrderBook,
};
