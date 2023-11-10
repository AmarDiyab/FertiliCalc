import React from "react";

const ConceptionDateForm = () => {
  return (
    <div>
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Conception Date</span>
          <input type="date" className="px-2 py-2 rounded-md w-44" />
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

export default ConceptionDateForm;
