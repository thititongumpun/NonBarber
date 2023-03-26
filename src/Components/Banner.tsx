import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(true);
  if (!show) {
    return null;
  }
  return (
    <div
      id="bottom-banner"
      tabIndex={-1}
      className="border-gray-200 dark:bg-gray-700 dark:border-gray-600 fixed bottom-0 left-0 z-50 flex w-full justify-between border-t bg-blue-500 p-4"
    >
      <div className="mx-auto flex items-center">
        <p className="text-gray-500 dark:text-gray-400 flex items-center text-sm font-normal">
          <span className="bg-gray-200 dark:bg-gray-600 mr-3 inline-flex rounded-full p-1">
            <svg
              className="text-gray-500 dark:text-gray-400 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
              ></path>
            </svg>
            <span className="sr-only">Discount coupon</span>
          </span>
          <span>
            {t("coupon")}
            <span className="text-dark ml-0 flex items-center text-sm font-medium hover:underline dark:text-blue-500 md:ml-1 md:inline-flex">
              {t("use_coupon")}
            </span>
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          data-dismiss-target="#bottom-banner"
          type="button"
          className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 inline-flex flex-shrink-0 items-center justify-center rounded-lg p-1.5 text-sm dark:hover:text-white"
          onClick={() => setShow(false)}
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
