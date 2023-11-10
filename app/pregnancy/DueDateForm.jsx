"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { reset, setStartDate } from "../redux/pregnancySlice";

const DueDateForm = () => {
  const form = useForm();
  const dispatch = useDispatch()

  const { register, control, handleSubmit, formState } = form;

  const subtractDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  const onSubmit = (data) => {
    const dueDate = data['dueDate'];
    const startDate = subtractDays(dueDate, 280);

    // Now you can use the startDate as needed.
    console.log(startDate);
    dispatch(setStartDate(startDate))
    // form.reset()
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-10">
          <div className="flex justify-between items-center ">
            <span className="font-semibold">Your Due Date</span>
            <input type="date" id="dueDate" className="px-2 py-2 rounded-md w-44" {...register("dueDate")} />
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

export default DueDateForm;
