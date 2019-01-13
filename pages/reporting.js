import HeadTag from '../components/head-tag';
import Nav from '../components/nav';
import ReportingCharts from '../containers/reporting-charts';

const Ticker = () => {
  return (
    <div className="container">
      <HeadTag title="Reporting" />
      <Nav />
      <ReportingCharts />
    </div>
  );
};

export default Ticker;