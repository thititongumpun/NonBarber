import { baseAPI } from './baseApi';
import { OpenHours } from './types';

export const getAllOpenHours = async () => {
  const { data } = await baseAPI.get<OpenHours[]>('openHours');
  return data;
}