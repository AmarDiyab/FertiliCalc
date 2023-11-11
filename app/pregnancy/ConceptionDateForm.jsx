import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setStartDate } from "../redux/pregnancySlice";

const ConceptionDateForm = () => {
    const dispatch = useDispatch();

    const form = useForm();
    const { register, handleSubmit }  = form

    const calculateStartDate = (conceptionDate) => {
        const adjustedDate = new Date(conceptionDate);
    adjustedDate.setDate(adjustedDate.getDate() + 14);
    adjustedDate.setDate(adjustedDate.getDate() - 266);

    // Format the calculated date
    const startDate = adjustedDate.toISOString().split("T")[0];

    return startDate
    }

    const onSubmit = (data) => {
        const conceptionDate = data["date"]

        const startDate = calculateStartDate(conceptionDate)

        console.log(startDate);
        dispatch(setStartDate(startDate));
    }


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} >
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Conception Date</span>
          <input type="date" id="date" {...register("date")} className="px-2 py-2 rounded-md w-44" />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-2 py-2 rounded-md w-44 font-semibold bg-[#f68c90]"
          >
            CALCULATE
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default ConceptionDateForm;
