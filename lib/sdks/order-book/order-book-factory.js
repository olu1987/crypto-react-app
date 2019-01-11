import OrderBook from './models/order-book';
import Order from './models/order';

function createOrderFromPayload([price, amount]) {
  return new Order({
    price,
    amount,
  });
}

function createOrderBookFromPayload(currencyPair, {
  timestamp,
  bids,
  asks,
}) {
  return new OrderBook({
    currencyPair,
    bids: bids.map(createOrderFromPayload),
    asks: asks.map(createOrderFromPayload),
    timestamp,
  });
}

export default {
  createOrderBookFromPayload,
};