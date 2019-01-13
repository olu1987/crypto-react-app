import includes from 'core-js/library/fn/string/includes';

export default [{
  Header: 'Currency Pair',
  accessor: 'currencyPair',
  filterable: true,
  className: 'currency-pair',
  filterMethod: (filter, row) => {
    const str = row[filter.id].toLowerCase();
    return includes(str, filter.value.toLowerCase());
  },
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
