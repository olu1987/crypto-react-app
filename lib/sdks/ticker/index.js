import axios from 'axios';
import apiConstants from '../../constants/api';
import tickerFactory from './ticker-factory';

function get(currencyPair) {
  return axios.get(`${apiConstants.CRPTO_API_URL}/ticker/${currencyPair}`)
    .then(payload => tickerFactory.createTickerFromPayload(payload))
    .catch(e => console.log(e));
}

export default {
  get,
};
