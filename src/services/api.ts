import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://divide-ai-api.onrender.com/',
  timeout: 5000,
});
