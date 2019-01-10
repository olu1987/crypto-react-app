import tickerSdk from '../lib/sdks/ticker';

const Ticker = () => {
  tickerSdk.getList().then(data => {
    console.log(data);
  });
  return (
    <div>Hello Ticker</div>
  );
};

export default Ticker;
