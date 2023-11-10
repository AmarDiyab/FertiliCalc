import React from "react";

const UltrasoundForm = () => {
  return (
    <div>
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Ultrasound Date</span>
          <input type="date" className="px-2 py-2 rounded-md w-44" />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Length of Pregnancy at the Time</span>
          <div className="flex space-x-5 appearance-none">
            <input
              type="numebr"
              placeholder="weeks"
              className="px-2 py-2 rounded-md w-20 appearance-none "
            />
            <input
              type="number"
              placeholder="days"
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
    </div>
  );
};

export default UltrasoundForm;
