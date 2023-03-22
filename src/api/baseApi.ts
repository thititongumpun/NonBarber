import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_AUTH0_SERVER_URL;

// const { getAccessTokenSilently } = useAuth0();
// const getToken = async () => {
//   return await getAccessTokenSilently();
// }

// const accessToken = getToken();

export const baseAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json"
  }
});

export const authAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
  }
});