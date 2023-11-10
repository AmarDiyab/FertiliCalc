/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DueDateForm from "./DueDateForm";
import LastPeriodForm from "./LastPeriodForm";
import UltrasoundForm from "./UltrasoundForm";
import ConceptionDateForm from "./ConceptionDateForm";
import IvfTransferDateForm from "./IvfTransferDateForm";
import { useDispatch, useSelector } from "react-redux";
import { clearStartState, selectStartDate } from "../redux/pregnancySlice";

const page = () => {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("due-date");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);

    dispatch(clearStartState())
  };

  const startDate = useSelector(selectStartDate);

  return (
    <div>
      <Navbar />
      <div className="mt-10 mx-[10rem]">
        <span className="text-2xl font-semibold text-[#f68c90]">
          PREGNANCY CALCULATOR
        </span>
        <div className="grid grid-cols-2 gap-10 mt-10">
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

            {selectedOption === "due-date" && <DueDateForm />}

            {selectedOption === "last-period" && <LastPeriodForm />}

            {selectedOption === "ultrasound" && <UltrasoundForm />}

            {selectedOption === "conception-date" && <ConceptionDateForm />}

            {selectedOption === "ivf-transfer-date" && <IvfTransferDateForm />}
          </div>

          <div className="px-7 py-7 border rounded-lg bg-[#a5dccd] hover:ease-in hover:bg-[#c4e9de] space-y-10 ">
            <span className="text-[#f68c90] font-semibold text-xl ">
              RESULT
            </span>
            {selectedOption === "due-date" && (
              <div>
                <span className="font-semibold">
                  START DATE is on{" "}
                  <span className="text-[#f68c90]">{startDate}</span>{" "}
                </span>
              </div>
            )}

            {selectedOption === "last-period" && (
                <div>
                <span className="font-semibold">
                  START DATE is on{" "}
                  <span className="text-[#f68c90]">{startDate}</span>{" "}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
