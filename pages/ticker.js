import { useTicker } from '../hooks';

const Ticker = () => {
  const tickerList = useTicker(5000);
  return (
    <div>{JSON.stringify(tickerList)}</div>
  );
};

export default Ticker;
