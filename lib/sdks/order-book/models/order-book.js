import OrderBookEstimator from './order-book-estimator'; 
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

  getAverageBidPrice = () => this.bids.reduce(
    (acc, bid) => acc + parseInt(bid.price, 10), 0) / this.bids.length;

  getAverageBidUnitRequested = () => this.bids.reduce(
    (acc, bid) => acc + parseInt(bid.amount, 10), 0) / this.bids.length;
  
  getAverageAskPrice = () => this.asks.reduce(
    (acc, ask) => acc + parseInt(ask.price, 10), 0) / this.asks.length;

  getAverageAskUnitRequested = () => this.asks.reduce(
    (acc, ask) => acc + parseInt(ask.amount, 10), 0) / this.asks.length;
  
  getEstimator = (percentage = 1) => new OrderBookEstimator({
    averageBidPrice: this.getAverageBidPrice(),
    averageBidUnitRequested: this.getAverageBidUnitRequested(),
    averageAskPrice: this.getAverageAskPrice(),
    averageAskUnitRequested: this.getAverageAskUnitRequested(),
    averageAskSafetyPrice: this.getAverageAskPrice() * percentage,
  });
}
