import axios from 'axios';
import apiConstants from '../../constants/api';
import orderBookFactory from './order-book-factory';

function get(currencyPair) {
  return axios.get(`${apiConstants.ALLOW_CORS_URL}${apiConstants.CRPTO_API_URL}/order_book/${currencyPair}`)
    .then(payload => orderBookFactory.createOrderBookFromPayload(currencyPair, payload.data))
    .catch(e => console.log(e));
}

export default {
  get,
};