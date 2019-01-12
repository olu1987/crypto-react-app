import React from 'react';
import ReactTable from 'react-table';
import useTicker from '../../hooks/ticker';
import columns from './constants/columns';
import ErrorOverlay from '../../components/error-overlay';

const TickerListTable = () => {
  const { tickerList, loading, error } = useTicker(300000);
  return (
    <React.Fragment>
      {error
         && (
         <ErrorOverlay
           text="Sorry but something went wrong. Please try again later"
         />
         )}
      {!error
         && (
         <React.Fragment>
           <h1>Ticker</h1>
           <ReactTable
             data={tickerList}
             columns={columns}
             loading={loading}
             minRows={tickerList.length}
             showPagination={tickerList.length > 20}
           />
         </React.Fragment>
         )}
    </React.Fragment>
  );
};

export default TickerListTable;
