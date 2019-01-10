import { useState, useEffect } from 'react';

import tickerSdk from '../lib/sdks/ticker';

const Ticker = () => {
  const [tickerList, setTickerList] = useState([]);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => { 
    setTimeout(() => {
      setRequestCount(requestCount + 1);
    }, 5000);
  });
  useEffect(() => {
    console.log('update');
    tickerSdk.getList().then((data) => {
      setTickerList(data);
    });
  }, [requestCount]);
 
  return (
    <div>{JSON.stringify(tickerList)}</div>
  );
};

export default Ticker;
