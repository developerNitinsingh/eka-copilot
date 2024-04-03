import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboardExpension.css";

function DashboardExpension() {
  return (
    <div className="min-w-[243px] min-h-[574px] bg-[#19193D] flex justify-center items-center mx-auto rounded dashboard  ">
      <div className="w-[198px] h-[528px] flex flex-col justify-between  ">
        <div className="border-b pb-4 border-b-[#ffffff73] ">
          <Link to={"/additionalDocumention5-3"}>
            <button className=" text-[#FFFFFF] font-light text-base w-[198px] h-[42px]  border border-[#98ADFB] bg-[#ffffff24] text-center flex justify-center items-center">
              Overview
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link to={"/select-plan"}>
            <div className=" w-[198px] h-[42px]  border border-[#98ADFB] bg-[#ffffff24] text-center flex justify-center items-center">
              <span className="text-[#FFFFFF] font-light text-base">
                Plan Selection
              </span>
            </div>
          </Link>
          <Link to={"/intake-details-2"}>
            <div className=" w-[198px] h-[42px]  border border-[#98ADFB] bg-[#ffffff24] text-center flex justify-center items-center">
              <span className="text-[#FFFFFF] font-light text-base">
                Intake Detail
              </span>
            </div>
          </Link>
          <Link to={"/provider-details-3"}>
            <div className=" w-[198px] h-[42px]  border border-[#98ADFB] bg-[#ffffff24] text-center flex justify-center items-center">
              <span className="text-[#FFFFFF] font-light text-base">
                Provider’s Detail
              </span>
            </div>
          </Link>
          <Link to={"/diagnosisProcedure-4"}>
            <div className=" w-[198px] h-[42px]  border border-[#98ADFB] bg-[#ffffff24] text-center flex justify-center items-center">
              <span className="text-[#FFFFFF] font-light text-base">
                Diagnosis
              </span>
            </div>
          </Link>
          <Link to={"/procedure-5"}>
            <div className=" w-[198px] h-[42px]  border border-[#98ADFB] bg-[#ffffff24] text-center flex justify-center items-center">
              <span className="text-[#FFFFFF] font-light text-base">
                Procedure & Rx
              </span>
            </div>
          </Link>
          <Link to={"/Review-6"}>
            <div className=" w-[198px] h-[42px]  border border-[#98ADFB] bg-[#ffffff24] text-center flex justify-center items-center">
              <span className="text-[#FFFFFF] font-light text-base">
                Request Review
              </span>
            </div>
          </Link>
          <Link to={"/"}>
            <div className=" w-[198px] h-[42px]  border border-[#98ADFB] bg-[#ffffff24] text-center flex justify-center items-center">
              <span className="text-[#FFFFFF] font-light text-base">
                Letters/Notes
              </span>
            </div>
          </Link>
          <Link to={"/additionalDocuments5-2"}>
            <div className=" w-[198px] h-[42px]  border border-[#98ADFB] bg-[#ffffff24] text-center flex justify-center items-center ">
              <span className="text-[#FFFFFF] font-light text-base">
                Attachments
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardExpension;
