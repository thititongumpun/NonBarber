import React, { useRef, useState } from "react";
import { useQuery } from "react-query";
import { getCoupon } from "../api/couponApi";

type Props = {};

export default function CouponPage({}: Props) {
  const { data: coupons } = useQuery("coupon", () => getCoupon());
  console.table(coupons)
  
  const [coupon, setCoupon] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const couponName = e.currentTarget.coupon.value;
    if (couponName === coupons![0].couponName) {
      setCoupon(`Discount  ${coupons![0].discount} THB`);
    } else {
      setCoupon("0");

    }

    e.currentTarget.reset();
  }

  return (
    <div className="flex flex-col p-4">
      <p className="mb-4 italic">
        If you have a coupon code, please enter it in the box below
      </p>
      <div className="mx-auto flex flex-col justify-center">
        <form action="" method="POST" onSubmit={handleSubmit}>
          <div className="h-13 bg-gray-100 flex w-full items-center rounded-full border bg-white pl-3">
            <input
              type="coupon"
              name="coupon"
              id="coupon"
              placeholder="Apply coupon"
              // defaultValue="ILOVENONBARBER"
              className="bg-gray-100 w-full appearance-none outline-none focus:outline-none active:outline-none"
            />
            <button
              type="submit"
              className="hover:bg-gray-700 flex items-center rounded-full bg-blue-800 px-3 py-1 text-sm text-white outline-none focus:outline-none active:outline-none md:px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              <span className="font-medium">Apply coupon</span>
            </button>
          </div>
        </form>
        <input type="text" value={coupon} readOnly className="rounded-3xl"/>
      </div>
    </div>
  );
}
