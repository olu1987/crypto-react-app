import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="nav">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/ticker">
        <a>Ticker</a>
      </Link>
      <Link href="/order-book">
        <a>Order Book</a>
      </Link>
      <style jsx>
        {`
          .nav {
            padding: 20px 20px 20px 0;
          }

          .nav > a {
            padding-right: 20px;
            font-weight: 700;
            color: #373a3c;
          }
        
          .nav > a:hover {
           text-decoration: none;
           opacity: 0.7;
          }
        `}
      </style>
    </div>
  );
};

export default Nav;