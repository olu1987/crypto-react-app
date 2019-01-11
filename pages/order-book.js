import OrderBookTable from '../containers/order-book-table';
import HeadTag from '../components/head-tag';
import Nav from '../components/nav';

const OrderBook = () => {
  return (
    <div className="container">
      <HeadTag />
      <Nav />
      <OrderBookTable />
    </div>
  );
};

export default OrderBook;