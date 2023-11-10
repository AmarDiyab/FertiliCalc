import React from "react";

const LastPeriodForm = () => {
    
    const cycleLength = [
        22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44,
      ];

  return (
    <div>
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between items-center">
          <span className="font-semibold">First Day of your Last Period</span>
          <input type="date" className="px-2 py-2 rounded-md w-44" />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Average Length of your Cycles</span>
          <select className="px-2 py-2 rounded-md w-44">
            {cycleLength.map((option) => (
              <option key={option} value="option">
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
    </div>
  );
};

export default LastPeriodForm;
