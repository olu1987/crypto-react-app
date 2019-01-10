import TickerListTable from '../containers/ticker-list-table';
import HeadTag from '../components/head-tag';
import Nav from '../components/nav';

const Ticker = () => {
  return (
    <div className="container">
      <HeadTag />
      <Nav />
      <TickerListTable />
    </div>
  );
};

export default Ticker;
