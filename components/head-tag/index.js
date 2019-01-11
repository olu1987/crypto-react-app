import React from 'react';
import Head from 'next/head';

const HeadTag = () => {
  return (
    <Head>
      <title>Ticker</title>
      <link href="/static/react-table.css" rel="stylesheet" />
      <link href="/static/main.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Head>
  );
};

export default HeadTag;