import Head from 'next/head';
import TickerListTable from '../containers/ticker-list-table';

const Ticker = () => {
  return (
    <div>
      <Head>
        <title>Ticker</title>
        <link href="/static/react-table.css" rel="stylesheet" />
        <link href="/static/main.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </Head>
      <TickerListTable />
    </div>
  );
};

export default Ticker;
