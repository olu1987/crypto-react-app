import axios from 'axios';
import apiConstants from '../../constants/api';
import orderBookFactory from './order-book-factory';

function get(currencyPair) {
  return axios.get(`${apiConstants.ALLOW_CORS_URL}${apiConstants.CRPTO_API_URL}/order_book/${currencyPair}`)
    .then((payload) => {
      let data;
      if (!payload) {
        return Promise.reject();
      }
      try {
        data = orderBookFactory.createOrderBookFromPayload(currencyPair, payload.data);
      } catch {
        return Promise.reject();
      }
      return data;
    })
    .catch(e => e);
}

export default {
  get,
};