import React from 'react';
import ReactHighcharts from 'react-highcharts';
import useReporting from '../../hooks/reporting';
import ErrorOverlay from '../../components/error-overlay';
import Spinner from '../../components/spinner';

const ReportingCharts = () => {
  const { graphOneConfig, graphTwoConfig, graphThreeConfig, graphFourConfig, error, loading } = useReporting(300000);
  return (
    <React.Fragment>
      {error
    && (
      <ErrorOverlay
        text=" Sorry but something went wrong. Please try again later"
      />
    )}
      {!error
      && (
        <div className="container">
          <h1>Reporting</h1>
          <div className="chart-row">
            <ReactHighcharts config={graphOneConfig} />
          </div>
          <div className="chart-row">
            <ReactHighcharts config={graphTwoConfig} />
          </div>
          <div className="chart-row">
            <ReactHighcharts config={graphThreeConfig} />
          </div>
          <div className="chart-row">
            <ReactHighcharts config={graphFourConfig} />
          </div>
        </div>
      )
      }
      <style jsx>
        {`
         .chart-row {
           margin-top: 50px;
         }


        `}
      </style>  
    </React.Fragment>
  );
};

export default ReportingCharts;
