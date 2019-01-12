export default [{
  Header: 'Currency Pair',
  accessor: 'currencyPair',
  filterable: true,
  filterMethod: (filter, row) => row[filter.id].toLowerCase().includes(filter.value.toLowerCase()),
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
