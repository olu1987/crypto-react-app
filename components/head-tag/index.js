import React from 'react';
import Head from 'next/head';

const HeadTag = () => {
  return (
    <Head>
      <title>Ticker</title>
      <link href="/static/react-table.css" rel="stylesheet" />
      <link href="/static/main.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Head>
  );
};

export default HeadTag;