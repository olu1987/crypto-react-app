const chartTypes = {
  BAR: 'bar',
  PIE: 'pie',
} 
 
 export const getBarConfig = ({ title, xAxisLabel, yXaxisLabel, dataLabel, dataList }) => ({
  chart: {
    type: chartTypes.BAR,
    height: '700px',
  },
  title: {
    text: title,
  },
  xAxis: {
    title: {
      text: xAxisLabel,
    },
  },
  yAxis: {
    title: {
      text: yXaxisLabel,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: dataList.map((estimator) => {
    return {
      name: estimator.currencyPair,
      data: [estimator[dataLabel]],
    };
  }),
});
 export const getPieConfig = ({ title, xAxisLabel, yXaxisLabel, dataLabel, dataList }) => ({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: chartTypes.PIE,
    height: '700px',
    styledMode: true,
  },
  title: {
    text: title,
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
      },
      showInLegend: true,
  },
  },
// series: [{
//     name: 'Currency Pairs',
//     colorByPoint: true,
//     data: [{
//         name: 'Chrome',
//         y: 61.41,
//         sliced: true,
//         selected: true
//     }, {
//         name: 'Internet Explorer',
//         y: 11.84
//     }, {
//         name: 'Firefox',
//         y: 10.85
//     }, {
//         name: 'Edge',
//         y: 4.67
//     }, {
//         name: 'Safari',
//         y: 4.18
//     }, {
//         name: 'Other',
//         y: 7.05
//     }]
// }]
series:[{
  data: dataList.map((estimator) => {
    return {
      name: estimator.currencyPair,
      y: estimator[dataLabel],
    };
  }),
}],
});

export default {
  getBarConfig,
  getPieConfig,
}