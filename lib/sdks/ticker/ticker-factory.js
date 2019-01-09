import Ticker from './models/ticker';

function createTickerFromPayload({
  high,
  last,
  timestamp,
  bid,
  vwap,
  volume,
  low,
  open
}) {
  return new Ticker({
    high,
    last,
    timestamp,
    bid,
    vwap,
    volume,
    low,
    open
  })
}

export default {
  createTickerFromPayload
}