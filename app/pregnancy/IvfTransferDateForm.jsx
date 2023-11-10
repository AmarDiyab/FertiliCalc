import React from "react";

const IvfTransferDateForm = () => {
  return (
    <div>
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Transfer Date</span>
          <input type="date" className="px-2 py-2 rounded-md w-44" />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Embryo Age</span>
          <div className="flex appearance-none">
            <input
              type="radio"
              name="embryo-age"
              id="3"
              className="px-2 py-2 rounded-md  "
            />
            <label htmlFor="3" className="mr-5 ml-2">
              DAY 3
            </label>
            <input
              type="radio"
              id="5"
              name="embryo-age"
              className="px-2 py-2 rounded-md "
            />
            <label htmlFor="5" className="mr-5 ml-2">
              DAY 5
            </label>

            <input
              type="radio"
              id="6"
              name="embryo-age"
              className="px-2 py-2 rounded-md "
            />
            <label htmlFor="7" className="mr-5 ml-2">
              DAY 7
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
    </div>
  );
};

export default IvfTransferDateForm;
