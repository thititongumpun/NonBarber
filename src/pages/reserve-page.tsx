import { useAuth0 } from "@auth0/auth0-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery, useQueryClient } from "react-query";
import TimeKeeper from "react-timekeeper";
import Datepicker from "tailwind-datepicker-react";
import { createReserve } from "../api/reserveApi";
import { ReserveSchemaType, reserveSchema } from "../api/schemas/reserveSchema";

type Props = {};

export default function ReservePage({}: Props) {
  const { t, i18n  } = useTranslation();
  const [token, setToken] = useState<string>("");
  const [time, setTime] = useState("12:00 pm");
  const [showTime, setShowTime] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

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
    createReserveFN(data);
  };

  const [show, setShow] = useState<boolean>(false);
  const handleClose = (state: boolean) => {
    setShow(state);
  };

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
    <section className="m-5 mx-auto flex max-w-lg items-center justify-center py-2">
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
              type="text"
              id="floating_discount"
              className="text-gray-900 border-gray-300 dark:border-gray-600 peer block w-full appearance-none border-0 border-b-2 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              disabled
              defaultValue={0}
              {...register("discount")}
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
                      onChange(data.formatted12);
                      setTime(data.formatted12);
                    }}
                    onDoneClick={() => setShowTime(false)}
                  />
                )}
                {!showTime && (
                  <Button color="gray" onClick={() => setShowTime(true)}>
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
    </section>
  );
}
