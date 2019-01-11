import React from 'react';
import ReactTable from 'react-table';
import ReactSelect from 'react-select';
import { useOrderBook } from '../../hooks';
import columns from './constants/columns';
import currencyPairs from '../../lib/constants/currency-pairs';

const OrderBookTable = () => {
  const { orderBookList, loading, setSelectedCurrencyPair, selectedCurrencyPair } = useOrderBook(300000);
  return (
    <React.Fragment>
      <h1>Order Book</h1>
      <div className="row">
        <div className="col pb-2">
          <ReactSelect
            instanceId="currency-selector"
            value={selectedCurrencyPair}
            options={currencyPairs}
            getOptionLabel={option => option.name}
            onChange={pair => setSelectedCurrencyPair(pair)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Bids</h3>
          <ReactTable
            data={orderBookList.bids}
            columns={columns}
            loading={loading}
          />
        </div>
        <div className="col">
          <h3>Asks</h3>
          <ReactTable
            data={orderBookList.asks}
            columns={columns}
            loading={loading}
          />
        </div>
      </div>
      
    </React.Fragment>
   
  );
};

export default OrderBookTable;
