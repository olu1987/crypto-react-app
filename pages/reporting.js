import HeadTag from '../components/head-tag';
import Nav from '../components/nav';
import ReportingCharts from '../containers/reporting-charts';

const Ticker = () => {
  return (
    <div className="container">
      <HeadTag />
      <Nav />
      <ReportingCharts />
    </div>
  );
};

export default Ticker;