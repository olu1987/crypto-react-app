import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const HeadTag = ({ title }) => {
  return (
    <Head>
      <title>{`${title} | Crypto React App | Olu Meduoye`}</title>
      <link href="/static/react-table.css" rel="stylesheet" />
      <link href="/static/main.css" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Head>
  );
};

HeadTag.propTypes = {
  title: PropTypes.string,
};

HeadTag.defaultProps = {
  title: '',
};

export default HeadTag;