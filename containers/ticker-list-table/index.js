import React from 'react';
import ReactTable from 'react-table';
import { useTicker } from '../../hooks';
import columns from './constants/columns';

const TickerListTable = () => {
  const { tickerList, loading } = useTicker(300000);
  return (
    <React.Fragment>
      <h1>Ticker</h1>
      <ReactTable
        data={tickerList}
        columns={columns}
        loading={loading}
      />
    </React.Fragment>
   
  );
};

export default TickerListTable;
