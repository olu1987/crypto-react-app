export default class OrderBookEstimator {
  constructor({
    currencyPair,
    averageBidPrice,
    averageBidUnitRequested,
    averageAskPrice,
    averageAskUnitRequested,
    averageAskSafetyPrice,
  }) {
    this.currencyPair = currencyPair;
    this.averageBidPrice = averageBidPrice;
    this.averageBidUnitRequested = averageBidUnitRequested;
    this.averageAskPrice = averageAskPrice;
    this.averageAskUnitRequested = averageAskUnitRequested;
    this.averageAskSafetyPrice = averageAskSafetyPrice;
  }

  setAverageAskSafetyPrice = (price) => {
    this.averageAskSafetyPrice = price;
  }
}