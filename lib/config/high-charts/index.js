const chartTypes = {
  BAR: 'bar',
  PIE: 'pie',
} 
 
 export const getBarConfig = ({ title, xAxisLabel, yXaxisLabel, dataLabel, dataList }) => ({
  chart: {
    type: chartTypes.BAR,
    height: '700px',
    events: {
      load() {
        this.showLoading();
        if (dataList.length) {
          this.hideLoading();
        }
      },
    },
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
    events: {
      load() {
        this.showLoading();
        if (dataList.length) {
          this.hideLoading();
        }
      },
    },
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