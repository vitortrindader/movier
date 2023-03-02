import axios from 'axios';
const Api = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 10000,
  headers: {},
});

export default Api;
