export default class OrderBook {
  constructor({
    currencyPair,
    bids,
    asks,
    timestamp,
  }) {
    this.currencyPair = currencyPair;
    this.bids = bids;
    this.asks = asks;
    this.timestamp = timestamp;
  }
}
