import axios from 'axios';
import apiConstants from '../../constants/api';
import orderBookFactory from './order-book-factory';
import currencyPairsList from '../../constants/currency-pairs';

function get(currencyPair) {
  return axios.get(`${apiConstants.ALLOW_CORS_URL}${apiConstants.CRPTO_API_URL}/order_book/${currencyPair.value}`)
    .then((payload) => {
      let data;
      if (!payload) {
        return Promise.reject();
      }
      try {
        data = orderBookFactory.createOrderBookFromPayload(currencyPair.name, payload.data);
      } catch {
        return Promise.reject();
      }
      return data;
    })
    .catch(e => e);
}

function getList() {
  return Promise.all(currencyPairsList.map(pair => get(pair)))
    .catch(e => Promise.reject(e));
}

export default {
  get,
  getList,
};