import axios, { AxiosRequestConfig } from "axios";
import { baseAPI } from "./baseApi";

export const getMe = async (accessToken: string) => {
  const config: AxiosRequestConfig = {
    url: `http://localhost:5132/WeatherForecast/me`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  }
  // const { data } = await axios.get<string>('http://localhost:5132/WeatherForecast/me', config);
  const { data } = await axios.get<string>('https://nonbarberapi.onrender.com/WeatherForecast/me', config);
  return data;
};