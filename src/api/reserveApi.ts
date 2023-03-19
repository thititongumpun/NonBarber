import { baseAPI } from "./baseApi";
import { ReserveSchemaType } from "./schemas/reserveSchema";

export const createReserve = async (accessToken: string, data: ReserveSchemaType) => {
  const response = await baseAPI.post<string>('api/reserve', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  })
  return response.data;
};