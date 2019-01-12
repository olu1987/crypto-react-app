import { useState, useEffect } from 'react';
import orderBookSdk from '../lib/sdks/order-book';
import { getBarConfig, getPieConfig } from '../lib/config/high-charts';

export default () => {
  const [estimatorList, setEstimatorList] = useState([]);
  const [graphOneConfig, setGraphOneConfig] = useState([]);
  const [graphTwoConfig, setGraphTwoConfig] = useState([]);
  const [graphThreeConfig, setGraphThreeConfig] = useState([]);
  const [graphFourConfig, setGraphFourConfig] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    orderBookSdk.getList().then((data) => {
      setLoading(false);
      if (!data) {
        return Promise.reject();
      }
      try {
        setEstimatorList(data.map(el => el.getEstimator()));
      } catch {
        return Promise.reject();
      }
    }).catch((e) => {
      setError(true);
    });
  }, [estimatorList.length]);
  useEffect(() => {
    setGraphOneConfig(getBarConfig(
      {
        title: 'Average Bid Price',
        xAxisLabel: 'Currency Pair',
        yXaxisLabel: 'Price',
        dataLabel: 'averageBidPrice',
        dataList: estimatorList,
      }));
    setGraphTwoConfig(getPieConfig(
      {
        title: 'Average Bid Unit Requested',
        dataLabel: 'averageBidUnitRequested',
        dataList: estimatorList,
      }));
    setGraphThreeConfig(getBarConfig(
      {
        title: 'Average Ask Price',
        xAxisLabel: 'Currency Pair',
        yXaxisLabel: 'Unit',
        dataLabel: 'averageAskPrice',
        dataList: estimatorList,
      }));
    setGraphFourConfig(getPieConfig(
      {
        title: 'Average Ask Unit Requested',
        dataLabel: 'averageAskUnitRequested',
        dataList: estimatorList,
      }));
  }, [estimatorList.length]);
  return {
    graphOneConfig,
    graphTwoConfig,
    graphThreeConfig,
    graphFourConfig,
    error,
    loading,
  };
};
