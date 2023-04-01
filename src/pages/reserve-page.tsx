import { useAuth0 } from "@auth0/auth0-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery, useQueryClient } from "react-query";
import TimeKeeper from "react-timekeeper";
import Datepicker from "tailwind-datepicker-react";
import { getCoupon } from "../api/couponApi";
import { createReserve } from "../api/reserveApi";
import { ReserveSchemaType, reserveSchema } from "../api/schemas/reserveSchema";

type Props = {};

export default function ReservePage({}: Props) {
  const { t, i18n } = useTranslation();
  const [token, setToken] = useState<string>("");
  const [time, setTime] = useState("12:00 pm");
  const [showTime, setShowTime] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const { data: coupons } = useQuery("coupon", () => getCoupon());
  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const couponName = e.currentTarget.coupon.value;
    if (couponName === coupons![0].couponName) {
      setCoupon(`${coupons![0].discount}`);
    } else {
      setCoupon("0");
    }

    // e.currentTarget.reset();
  }

  const [coupon, setCoupon] = useState("");
  useEffect(() => {
    let isMounted = true;

    const getToken = async () => {
      const accessToken = await getAccessTokenSilently();

      if (!isMounted) {
        return;
      }

      if (accessToken) {
        setToken(accessToken);
      }
    };

    getToken();

    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ReserveSchemaType>({ resolver: zodResolver(reserveSchema) });

  const { isLoading, mutate: createReserveFN } = useMutation(
    (data: ReserveSchemaType) => createReserve(token, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("bookings");
        toast.success(t("success_reserve"));
        // setOpenBookingModal(false);
      },
      onError: (error: any) => {
        // setOpenBookingModal(false);
        if (Array.isArray(error.response.data.error)) {
          error.data.error.forEach((el: any) =>
            toast.error(el.message, {
              position: "top-right",
            })
          );
        } else {
          toast.error(error.response.data.message, {
            position: "top-right",
          });
        }
      },
    }
  );

  const onSubmit: SubmitHandler<ReserveSchemaType> = (data) => {
    console.log(data);
    // createReserveFN(data);
  };

  const [show, setShow] = useState<boolean>(false);
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  function handleCoupon(e: React.ChangeEvent<HTMLInputElement>) {
    setCoupon(e.target.value);
  }

  const options = {
    title: "",
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-13",
    defaultDate: new Date(),
    language: i18n.language,
  };

  return (
    <section className="m-5 mx-auto flex max-w-lg flex-col items-center justify-center py-2">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto flex flex-col gap-y-5">
          <h1 className="text-center text-3xl">{`${t("pick_date")}`}</h1>
          <Controller
            control={control}
            name="reserveDate"
            defaultValue={new Date()}
            render={({ field: { onChange } }) => (
              <Datepicker
                options={options}
                onChange={onChange}
                show={show}
                setShow={handleClose}
              />
            )}
          />
          {errors.reserveDate && <span>{errors.reserveDate.message}</span>}
          <div className="group relative z-0 w-full">
            <input
              type="number"
              id="floating_discount"
              className="text-gray-900 border-gray-300 dark:border-gray-600 peer block w-full appearance-none border-0 border-b-2 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              readOnly
              {...register("discount")}
              value={coupon}
              onChange={handleCoupon}
            />
            <label
              htmlFor="floating_discount"
              className="text-gray-500 dark:text-gray-400 absolute top-1 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              {t("discount")}
            </label>
          </div>
          {errors.discount && <span>{errors.discount.message}</span>}
          <Controller
            control={control}
            name="reserveTime"
            defaultValue="12:00 pm"
            render={({ field: { onChange, value } }) => (
              <div className="flex flex-col items-center justify-center">
                {showTime && (
                  <TimeKeeper
                    time={value}
                    onChange={(data) => {
                      onChange(data.formatted24);
                      setTime(data.formatted24);
                    }}
                    doneButton={() => (
                      <div
                        className="cursor-pointer rounded-md bg-blue-600 p-2 text-center text-white"
                        onClick={() => setShowTime(false)}
                      >
                        {t("confirm")}
                      </div>
                    )}
                    coarseMinutes={30}
                    forceCoarseMinutes
                    hour24Mode
                    switchToMinuteOnHourSelect
                    disabledTimeRange={{ from: "19:00", to: "09:00" }}
                  />
                )}
                {!showTime && (
                  <Button color="blue" onClick={() => setShowTime(true)}>
                    {t("show_time")}
                  </Button>
                )}
                <span className="m-2 p-2 text-sm">
                  {t("pick_time")}: {time}
                </span>
              </div>
            )}
          />
          {errors.reserveTime && <span>{errors.reserveTime.message}</span>}
          <Button type="submit">{t("submit_reserve")}</Button>
        </div>
      </form>
      <>
        <div className="mx-auto flex flex-col justify-center">
          <form action="" method="POST" onSubmit={handleSubmitForm}>
            <div className="h-13 bg-gray-100 flex w-full items-center rounded-full border bg-white pl-3">
              <input
                type="coupon"
                name="coupon"
                id="coupon"
                placeholder="Apply coupon"
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
        </div>
      </>
    </section>
  );
}
