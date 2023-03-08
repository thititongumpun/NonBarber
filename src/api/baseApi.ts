import axios from 'axios';

const BASE_URL = import.meta.env.VITE_AUTH0_SERVER_URL;

export const baseAPI = axios.create({
  baseURL: BASE_URL,
});
