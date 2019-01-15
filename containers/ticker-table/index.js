import React from 'react';
import ReactTable from 'react-table';
import ReactSelect from 'react-select';
import useTicker from '../../hooks/ticker';
import columns from './constants/columns';
import ErrorOverlay from '../../components/error-overlay';
import currencyPairs from '../../lib/constants/currency-pairs';

import '../../lib/polyfills';

const TickerTable = () => {
  const { ticker, loading, error, setSelectedCurrencyPair, selectedCurrencyPair } = useTicker(300000);
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
           <div className="row">
             <div className="col-md-6 col-sm-12 currency-pair-col">
               <h4 className="pb-2">Currency Pair</h4>
               <ReactSelect
                 instanceId="currency-selector"
                 value={selectedCurrencyPair}
                 options={currencyPairs}
                 getOptionLabel={option => option.name}
                 onChange={pair => setSelectedCurrencyPair(pair)}
               />
             </div>
           </div>
           <div className="row mt-3">
             <div className="col">
               <ReactTable
                 data={[ticker]}
                 columns={columns}
                 loading={loading}
                 minRows={1}
                 showPagination={ticker.length > 20}
               />
             </div>
           </div>
         </React.Fragment>
         )}
    </React.Fragment>
  );
};

export default TickerTable;
