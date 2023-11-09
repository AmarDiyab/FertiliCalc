/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const page = () => {
  const [selectedOption, setSelectedOption] = useState("due-date");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const cycleLength = [
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44,
  ];

  return (
    <div>
      <Navbar />
      <div className="mt-10 mx-[10rem]">
        <span className="text-2xl font-semibold text-[#f68c90]">
          PREGNANCY CALCULATOR
        </span>
        <div className="grid grid-cols-1 gap-10 mt-10">
          <div className="px-7 py-7 border rounded-lg bg-[#a5dccd] hover:ease-in hover:bg-[#c4e9de] space-y-10 ">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Calculate Based On</span>
              <select
                name="selection"
                id="selection"
                className="px-2 py-2 rounded-md w-44 border"
                onChange={handleSelectChange}
                value={selectedOption}
              >
                <option value="due-date">Due Date</option>
                <option value="last-period">Last Period</option>
                <option value="ultrasound">UltraSound</option>
                <option value="conception-date">Conception Date</option>
                <option value="ivf-transfer-date">IVF Transfer Date</option>
              </select>
            </div>

            {selectedOption === "due-date" && (
              <div className="flex justify-between items-center">
                <span className="font-semibold">Your Due Date</span>
                <input type="date" className="px-2 py-2 rounded-md w-44" />
              </div>
            )}

            {selectedOption === "last-period" && (
              <div className="flex flex-col space-y-10">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">
                    First Day of your Last Period
                  </span>
                  <input type="date" className="px-2 py-2 rounded-md w-44" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">
                    Average Length of your Cycles
                  </span>
                  <select className="px-2 py-2 rounded-md w-44">
                    {cycleLength.map((option) => (
                      <option key={option} value="option">
                        {option} days
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {selectedOption === "ultrasound" && (
              <div className="flex flex-col space-y-10">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Ultrasound Date</span>
                  <input type="date" className="px-2 py-2 rounded-md w-44" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">
                    Length of Pregnancy at the Time
                  </span>
                  <div className="flex space-x-5 appearance-none">
                    <input
                      type="numebr"
                      placeholder="weeks"
                      className="px-2 py-2 rounded-md w-44 appearance-none "
                    />
                    <input
                      type="number"
                      placeholder="days"
                      className="px-2 py-2 rounded-md w-44 appearance-none "
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedOption === "conception-date" && (
              <div className="flex justify-between items-center">
                <span className="font-semibold">Conception Date</span>
                <input type="date" className="px-2 py-2 rounded-md w-44" />
              </div>
            )}

            {selectedOption === "ivf-transfer-date" && (
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
                    <label htmlFor="3" className="mr-5 ml-2">DAY 3</label>
                    <input
                      type="radio"
                      id="5"
                      name="embryo-age"
                      className="px-2 py-2 rounded-md "
                    />
                    <label htmlFor="5" className="mr-5 ml-2">DAY 5</label>

                    <input
                      type="radio"
                      id="6"
                      name="embryo-age"
                      className="px-2 py-2 rounded-md "
                    />
                    <label htmlFor="7" className="mr-5 ml-2">DAY 7</label>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <button className="px-2 py-2 rounded-md w-44 font-semibold bg-[#f68c90]">
                CALCULATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
