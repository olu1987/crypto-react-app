import React from 'react';
import ReactTable from 'react-table';
import ReactSelect from 'react-select';
import { useOrderBook } from '../../hooks';
import columns from './constants/columns';
import safetyPercentages from './constants/safety-percentages';
import currencyPairs from '../../lib/constants/currency-pairs';
import ErrorOverlay from '../../components/error-overlay';


const OrderBookTable = () => {
  const {
    orderBookList,
    loading,
    setSelectedCurrencyPair,
    selectedCurrencyPair,
    orderBookEstimator,
    selectedSafetyPercentage,
    setSelectedSafetyPercentage,
    error,
  } = useOrderBook(300000);
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
        <React.Fragment>  
          <div className="row">
            <div className="col">
              <h4>Currency Pair</h4>
              {}
            </div>
            <div className="col pb-2">
              <ReactSelect
                instanceId="currency-selector"
                value={selectedCurrencyPair}
                options={currencyPairs}
                getOptionLabel={option => option.name}
                onChange={pair => setSelectedCurrencyPair(pair)}
              />
            </div>
            <div className="col">
              <h4>Safety Percentage Order</h4>
            </div>
            <div className="col pb-2">
              <ReactSelect
                instanceId="safety-percentage-selector"
                value={selectedSafetyPercentage}
                options={safetyPercentages}
                onChange={safetyPercentage => setSelectedSafetyPercentage(safetyPercentage)}
              />
            </div>
          </div>
          <h1 className="main-header">Order Book <small>{selectedCurrencyPair.name}</small></h1>
          <div className="row estimator-row">
            <div className="col-12">
              <h3>Estimator</h3>
            </div>
            <div className="col">
              <ReactTable
                data={orderBookEstimator}
                columns={columns.ESTIMATOR}
                loading={loading}
                minRows={1}
                showPagination={false}
              />
            </div>
          </div>
          <div className="row bids-row">
            <div className="col">
              <h3>Bids</h3>
              <ReactTable
                data={orderBookList.bids}
                columns={columns.BOOK}
                loading={loading}
              />
            </div>
            <div className="col">
              <h3>Asks</h3>
              <ReactTable
                data={orderBookList.asks}
                columns={columns.BOOK}
                loading={loading}
              />
            </div>
          </div>
          
          <style jsx>
            {`
              .main-header, .estimator-row, .bids-row {
                margin-top: 20px;
              }

              .error-overlay {
                height: 100%;
                width: 100%;
                background: grey;
              }
            `}
          </style>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default OrderBookTable;
