import { useState, useEffect } from 'react';
import useOrderBook from './order-book';
import orderBookSdk from '../lib/sdks/order-book';

export default () => {
  const [estimatorList, setEstimatorList] = useState([]);
  const [graphOneConfig, setGraphOneConfig] = useState([]);
  const [graphTwoConfig, setGraphTwoConfig] = useState([]);
  const [graphThreeConfig, setGraphThreeConfig] = useState([]);
  const [graphFourConfig, setGraphFourConfig] = useState([]);

  const getConfig = ({ title, type, xAxisLabel, yXaxisLabel, dataLabel }) => ({
    chart: {
      type: 'bar',
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
    series: estimatorList.map((estimator) => {
      return {
        name: estimator.currencyPair,
        data: [estimator[dataLabel]],
      };
    }),
  });

  useEffect(() => {
    orderBookSdk.getList().then((data) => {
      setEstimatorList(data.map(el => el.getEstimator()));
      console.log(estimatorList);
    });
  }, [estimatorList.length]);
  useEffect(() => {
    setGraphOneConfig(getConfig(
      {
        title: 'Average Bid Price',
        type: 'column',
        xAxisLabel: 'Currency Pair',
        yXaxisLabel: 'Price',
        dataLabel: 'averageBidPrice',
      }));
    setGraphTwoConfig(getConfig(
      {
        title: 'Average Bid Unit Requested',
        type: 'column',
        xAxisLabel: 'Currency Pair',
        yXaxisLabel: 'Unit',
        dataLabel: 'averageBidUnitRequested',
      }));
    setGraphThreeConfig(getConfig(
      {
        title: 'Average Ask Price',
        type: 'column',
        xAxisLabel: 'Currency Pair',
        yXaxisLabel: 'Unit',
        dataLabel: 'averageAskPrice',
      }));
    setGraphFourConfig(getConfig(
      {
        title: 'Average Ask Unit Requested',
        type: 'column',
        xAxisLabel: 'Currency Pair',
        yXaxisLabel: 'Unit',
        dataLabel: 'averageAskUnitRequested',
      }));
  }, [estimatorList.length]);
  return { graphOneConfig, graphTwoConfig, graphThreeConfig, graphFourConfig };
};
