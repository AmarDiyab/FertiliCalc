import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setStartDate } from "../redux/pregnancySlice";
import moment from "moment";

const IvfTransferDateForm = () => {
  const dispatch = useDispatch();

  const form = useForm();
  const { register, handleSubmit } = form;

  const calculateStartDate = (transferDate, embryoAge) => {
    const ivfDate = moment(transferDate); // Use moment to handle dates
    ivfDate.subtract(embryoAge, 'days'); // Subtract embryo age in days

    // Format the calculated date
    const startDate = ivfDate.format("YYYY-MM-DD");

    return startDate;
  };

  const onSubmit = (data) => {
    const transferDate = data["date"];
    const embryoAge = data["embryo-age"];

    console.log(embryoAge);

    const startDate = calculateStartDate(transferDate, embryoAge);

    console.log(startDate);
    dispatch(setStartDate(startDate));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Transfer Date</span>
          <input
            type="date"
            id="date"
            {...register("date")}
            className="px-2 py-2 rounded-md w-44"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Embryo Age</span>
          <div className="flex appearance-none">
            <input
              type="radio"
              name="embryo-age"
              id="3"
              value="3"
              className="px-2 py-2 rounded-md  "
              {...register("embryo-age")}
            />
            <label htmlFor="3" className="mr-5 ml-2">
              DAY 3
            </label>
            <input
              type="radio"
              id="5"
              value="5"
              name="embryo-age"
              className="px-2 py-2 rounded-md "
              {...register("embryo-age")}
            />
            <label htmlFor="5" className="mr-5 ml-2">
              DAY 5
            </label>

            <input
              type="radio"
              id="6"
              value="6"
              name="embryo-age"
              className="px-2 py-2 rounded-md "
              {...register("embryo-age")}
            />
            <label htmlFor="6" className="mr-5 ml-2">
              DAY 6
            </label>
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

export default IvfTransferDateForm;
