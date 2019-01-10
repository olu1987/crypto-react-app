import Ticker from './models/ticker';

function createTickerFromPayload(currencyPair, {
  ask,
  high,
  last,
  timestamp,
  bid,
  vwap,
  volume,
  low,
  open,
}) {
  return new Ticker({
    currencyPair,
    ask,
    high,
    last,
    timestamp,
    bid,
    vwap,
    volume,
    low,
    open,
  });
}

export default {
  createTickerFromPayload,
};
