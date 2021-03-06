export default class Ticker {
  constructor({
    currencyPair,
    high,
    last,
    timestamp,
    bid,
    vwap,
    volume,
    low,
    ask,
    open,
  }) {
    this.currencyPair = currencyPair;
    this.high = high;
    this.last = last;
    this.timestamp = timestamp;
    this.bid = bid;
    this.vwap = vwap;
    this.volume = volume;
    this.low = low;
    this.ask = ask;
    this.open = open;
  }
}