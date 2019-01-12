import React from 'react';
import ReactHighcharts from 'react-highcharts';

const config = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Fruit Consumption',
  },
  xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges'],
  },
  yAxis: {
    title: {
      text: 'Fruit eaten',
    },
  },
  series: [{
    name: 'Jane',
    data: [1, 0, 4],
},
{
    name: 'John',
    data: [5, 7, 3],
}],
};

const ReportingCharts = () => {
  return (
    <div>
      <h1>Reporting</h1>
      <ReactHighcharts config={config} />
    </div>
  );
};

export default ReportingCharts;
