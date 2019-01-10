import Ticker from './models/ticker';

function createTickerFromPayload({
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
