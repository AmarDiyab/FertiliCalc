import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setStartDate } from "../redux/pregnancySlice";

const UltrasoundForm = () => {
    const dispatch = useDispatch();

    const form = useForm();
    const {register, handleSubmit} = form

    function calculateStartDate(ultrasoundDate, weeks, days) {
        // Convert the ultrasound date to a Date object
        const ultrasound = new Date(ultrasoundDate);
        
        // Calculate the total number of days from weeks and days
        const totalDays = weeks * 7 + days;
      
        // Subtract the total number of days from the ultrasound date
        const startDate = new Date(ultrasound.getTime() - totalDays * 24 * 60 * 60 * 1000);

        return startDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
      }


    const onSubmit = (data) => {
        const ultrasoundDate = data["date"]
        const weeks = data["weeks"]
        const days = data["days"]

        const startDate = calculateStartDate(ultrasoundDate, weeks, days)
        
        console.log(ultrasoundDate);
        console.log(weeks);
        console.log(days);
        dispatch(setStartDate(startDate))
    }



  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Ultrasound Date</span>
          <input type="date" id="date" {...register("date")} className="px-2 py-2 rounded-md w-44" />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Length of Pregnancy at the Time</span>
          <div className="flex space-x-5 appearance-none">
            <input
              type="number"
              id="weeks"
              {...register("weeks")}
              placeholder="weeks"
              className="px-2 py-2 rounded-md w-20 appearance-none "
            />
            <input
              type="number"
              placeholder="days"
              id="days"
              {...register("days")}
              className="px-2 py-2 rounded-md w-20 appearance-none "
            />
          </div>
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

export default UltrasoundForm;
