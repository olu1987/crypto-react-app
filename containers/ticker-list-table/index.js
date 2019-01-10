import React from 'react';
import ReactTable from 'react-table';
import { useTicker } from '../../hooks';
import columns from './constants/columns';

const index = () => {
  const { tickerList, loading } = useTicker(30000);
  return (
    <ReactTable
      data={tickerList}
      columns={columns}
      loading={loading}
    />
  );
};

export default index;