import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "flowbite-react";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import Datepicker from "tailwind-datepicker-react";
import { ReserveSchemaType, reserveSchema } from "../api/schemas/reserveSchema";

type Props = {};

export default function ReservePage({}: Props) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ReserveSchemaType>({ resolver: zodResolver(reserveSchema) });

  const onSubmit: SubmitHandler<ReserveSchemaType> = (data) =>
    console.log(data);

  const [show, setShow] = useState<boolean>(false);
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const options = {
    title: `${t("pick_date")}`,
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
    defaultDate: new Date("2022-01-01"),
    language: "en",
  };

  return (
    <div className="mx-auto flex items-center justify-center max-w-lg max-h-80">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto flex flex-col gap-y-5">
          <input
            className="rounded-full"
            type="number"
            placeholder="discount"
            {...register("discount")}
          />
          {errors.discount && <span>{errors.discount.message}</span>}
          <input
            className="rounded-full"
            placeholder="userId"
            {...register("userId")}
          />
          {errors.userId && <span>{errors.userId.message}</span>}
          <Button color="purple" pill={true}>
            Purple
          </Button>

          <Controller
            control={control}
            name="reserveDate"
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
          <Button type="submit">submit!</Button>
        </div>
      </form>
    </div>
  );
}
