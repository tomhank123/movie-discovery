import axios from 'axios';
import { API_KEY } from './constants';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default instance;
