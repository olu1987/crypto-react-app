import TickerTable from '../containers/ticker-table';
import HeadTag from '../components/head-tag';
import Nav from '../components/nav';

const Ticker = () => {
  return (
    <div className="container">
      <HeadTag title="Ticker" />
      <Nav />
      <TickerTable />
    </div>
  );
};

export default Ticker;
