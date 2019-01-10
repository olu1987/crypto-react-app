import axios from 'axios';
import apiConstants from '../../constants/api';
import tickerFactory from './ticker-factory';
import currencyPairsList from '../../constants/currency-pairs';

const composePromise = (...functions) => initialValue => functions.reduceRight(
  (acc, fn) => Promise.resolve(acc).then(fn),
  initialValue,
);

function get(currencyPair) {
  return axios.get(`${apiConstants.ALLOW_CORS_URL}${apiConstants.CRPTO_API_URL}/ticker/${currencyPair}`)
    .then(payload => tickerFactory.createTickerFromPayload(payload.data))
    .catch(e => console.log(e));
}

function getList() {
  return Promise.all(currencyPairsList.map(pair => get(pair.value)));
}

export default {
  get,
  getList,
};
