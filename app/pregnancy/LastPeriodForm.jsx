import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setStartDate } from "../redux/pregnancySlice";

const LastPeriodForm = () => {
    const dispatch = useDispatch();
    const form = useForm();
  

  const { register, handleSubmit } = form;

  const cycleLength = [
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44,
  ];

  function calculateDueDate(lastMenstrualPeriod, cycleLength) {
    // Convert the input date string to a Date object
    const lmpDate = new Date(lastMenstrualPeriod);

    // Calculate the difference between the current cycle length and the average cycle length
    const cycleLengthDifference = cycleLength - 28;

    // Scale the gestational age adjustment based on the difference
    const gestationalAgeAdjustment = cycleLengthDifference;

    // Calculate the start date of pregnancy by subtracting 14 days from the LMP
    const startDate = new Date(
      lmpDate.getTime() - (14 - gestationalAgeAdjustment) * 24 * 60 * 60 * 1000
    );

    return startDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  }

  const onSubmit = (data) => {
    const lastMenstrualPeriod = data["date"]
    const cycleLength = data["cycleLength"]

    const startDate = calculateDueDate(lastMenstrualPeriod, cycleLength)

    console.log(startDate);
    dispatch(setStartDate(startDate))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-10">
          <div className="flex justify-between items-center">
            <span className="font-semibold">First Day of your Last Period</span>
            <input type="date" id="date" className="px-2 py-2 rounded-md w-44" {...register("date")} />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Average Length of your Cycles</span>
            <select className="px-2 py-2 rounded-md w-44" id="cycleLength" {...register("cycleLength")}>
              {cycleLength.map((option) => (
                <option key={option} value={option}>
                  {option} days
                </option>
              ))}
            </select>
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

export default LastPeriodForm;
