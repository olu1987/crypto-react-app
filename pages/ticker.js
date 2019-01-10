import { useState, useEffect } from 'react';

import tickerSdk from '../lib/sdks/ticker';

const Ticker = () => {
  const [tickerList, setTickerList] = useState([]);

  useEffect(() => {
    tickerSdk.getList().then((data) => {
      setTickerList(data);
    });
  });
 
  return (
    <div>{JSON.stringify(tickerList)}</div>
  );
};

export default Ticker;
