import React from 'react';
import ReactHighcharts from 'react-highcharts';
import useReporting from '../../hooks/reporting';

const ReportingCharts = () => {
  const { graphOneConfig, graphTwoConfig, graphThreeConfig, graphFourConfig, loading } = useReporting(300000);
  return (
    <div className="container"> 
      <h1>Reporting</h1>
      <ReactHighcharts config={graphOneConfig} />
      <ReactHighcharts config={graphTwoConfig} />
      <ReactHighcharts config={graphThreeConfig} />
      <ReactHighcharts config={graphFourConfig} />
    </div>
  );
};

export default ReportingCharts;
