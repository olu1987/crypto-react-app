import ReactTable from 'react-table';
import Head from 'next/head';
import { useTicker } from '../hooks';

const columns = [{
  Header: 'Currency Pair',
  accessor: 'currencyPair',
},
{
  Header: 'High',
  accessor: 'high',
},
{
  Header: 'Last',
  accessor: 'last',
},
{
  Header: 'Timestamp',
  accessor: 'timestamp',
},
{
  Header: 'Bid',
  accessor: 'bid',
},
{
  Header: 'Vwap',
  accessor: 'vwap',
},
{
  Header: 'Volume',
  accessor: 'volume',
},
{
  Header: 'Low',
  accessor: 'low',
},
{
  Header: 'Ask',
  accessor: 'ask',
},
{
  Header: 'Open',
  accessor: 'open',
}];


const Ticker = () => {
  const { tickerList, loading } = useTicker(5000);
  return (
    <div>
      <Head>
        <title>Ticker</title>
        <link href="/static/react-table.css" rel="stylesheet" />
        <link href="/static/main.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </Head>
      <ReactTable
        data={tickerList}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};

export default Ticker;
