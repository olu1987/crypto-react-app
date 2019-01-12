export default class OrderBookEstimator {
  constructor({
    averageBidPrice,
    averageBidUnitRequested,
    averageAskPrice,
    averageAskUnitRequested,
    averageAskSafetyPrice,
  }) {
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