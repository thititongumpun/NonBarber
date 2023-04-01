import { baseAPI } from "./baseApi";
import { Coupon } from "./types";

export const getCoupon = async () => {
  const { data } = await baseAPI.get<Coupon[]>("api/coupon");
  return data;
};
