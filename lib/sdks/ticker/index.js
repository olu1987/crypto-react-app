import axios from 'axios';
import apiConstants from '../../constants/api';
import tickerFactory from './ticker-factory';
import currencyPairsList from '../../constants/currency-pairs';

function get(currencyPair) {
  return axios.get(`${apiConstants.ALLOW_CORS_URL}${apiConstants.CRPTO_API_URL}/ticker/${currencyPair}`)
    .then(payload => tickerFactory.createTickerFromPayload(payload.data))
    .catch(e => console.log(e));
}

export default {
  get,
};
