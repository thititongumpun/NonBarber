import { authAPI } from "./baseApi";
import { ReserveSchemaType } from "./schemas/reserveSchema";

export const createReserve = async (accessToken: string, data: ReserveSchemaType) => {
  console.log(accessToken)
  const response = await authAPI.post<string>('api/reserve', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  })
  return response.data;
};