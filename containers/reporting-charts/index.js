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
          <ReactHighcharts config={graphOneConfig} />
          <ReactHighcharts config={graphTwoConfig} />
          <ReactHighcharts config={graphThreeConfig} />
          <ReactHighcharts config={graphFourConfig} />
        </div>
      )
      }
      <style jsx>
        {`


        `}
      </style>  
    </React.Fragment>
  );
};

export default ReportingCharts;
