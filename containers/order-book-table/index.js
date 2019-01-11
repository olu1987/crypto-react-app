import React from 'react';
import ReactTable from 'react-table';
import { useOrderBook } from '../../hooks';
import columns from './constants/columns';

const OrderBookTable = () => {
  const { orderBookList, loading } = useOrderBook(300000);
  return (
    <React.Fragment>
      <h1>Order Book</h1>
      <div className="row">
        <div className="col-sm-6">
          <h3>Bids</h3>
          <ReactTable
            data={orderBookList.bids}
            columns={columns}
            loading={loading}
          />
        </div>
        <div className="col-sm-6">
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
