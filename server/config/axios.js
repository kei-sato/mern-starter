// api request utilities
import axios from 'axios';
import { polyfill } from 'es6-promise';

module.exports = function() {
  // configure baseURL for axios requests (for serverside API calls)
  axios.defaults.baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : ''
  polyfill();
}
