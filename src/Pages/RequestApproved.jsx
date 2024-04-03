import React, { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {
  approved,
  chatIcon,
  pdf,
  profilePic,
  rightBigArrow,
  send,
  table,
} from "../assets/Images";
import { optionThreeDot } from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";

function RequestApproved() {
  const [style, setStyle] = useState({
    display: "flex",
  });

  const navigate = useNavigate();
  function closeError() {
    setStyle({
      display: "none",
    });
    navigate("/");
  }
  return (
    <HomeLayout>
      <div className="min-h-[90vh] my-5 shadow-2xl h-auto w-full flex   flex-col py-5 justify-between mx-auto blur-sm relative">
        <div className="flex flex-col gap-7">
          <div className="shadow-md border border-[#AEAEAE] flex flex-col gap-2 rounded mx-auto">
            <div className="flex  items-center   w-[900px] px-2 gap-3  rounded h-[70px] justify-between">
              <div className="flex gap-3 items-center">
                <img src={profilePic} alt="" className="w-[54px] h-[54px]  " />
                <p className="text-2xl font-normal text-[#000000]  text-center flex gap-2">
                  <span className="text-[#19193D] font-normal text-lg">
                    I want to search request using
                  </span>
                  <span className="text-[#98ADFB] font-normal text-lg">
                    Member ID
                  </span>
                </p>
              </div>
              <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
                <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
              </div>
            </div>
            <div className="flex  items-center   w-[900px] px-2 gap-3  rounded h-[70px] justify-between">
              <div className="flex gap-3 items-center">
                <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
                <p className="text-2xl font-normal text-[#000000]  text-center flex gap-2">
                  <span className="text-[#19193D] font-normal text-lg">
                    Sure. Please enter the Member ID for whom you are requesting
                    Prior
                  </span>
                  <span className="text-[#19193D] font-normal text-lg">
                    Authorization
                  </span>
                </p>
              </div>
              <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
                <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
              </div>
            </div>
          </div>

          <div className="flex items-center w-[425px] h-[55px] rounded border justify-around text-left mx-7 shadow-md border-[#19193D] ">
            <input
              type="text"
              name=""
              id=""
              placeholder="0011223366881|"
              className="font-normal text-lg w-[335px] h-[23px] text-[#AEAEAE] bg-none bg-transparent outline-none"
            />
            <button className="bg-[#98ADFB] w-[51px] h-[37px] flex justify-center items-center">
              <img src={rightBigArrow} alt="" className="w-[16px] h-[12px]" />
            </button>
          </div>
        </div>

        <InputPrompt className={"w-[895px] mx-auto"} />
      </div>

      <div className="text-red-600 absolute top-2/4 left-[60%] flex flex-col justify-center items-center -translate-x-2/4 -translate-y-2/4 gap-3 ">
        <button className="absolute right-0 top-0 " onClick={closeError}>
          <AiFillCloseCircle />
        </button>
        <img src={approved} alt="" className="w-[368px] h-[368px] " />

        <p className="flex flex-col text-center">
          <span className="font-medium text-[22px] text-[#FD6262]">
            Good news!
          </span>
          <span className="font-normal text-lg text-[#19193D]">
            The Prior Authorization request has been approved!
          </span>
        </p>

        <div className="flex items-center gap-4">
          <Link to={"/overview"}>
            <button className="w-[238px] h-[40px] flex justify-center items-center gap-2 border border-[#19193D] rounded">
              <img src={pdf} alt="" className="w-[25px] h-[25px]" />
              <p className="text-[#000000] font-normal text-lg">
                Provider Letter
              </p>
            </button>
          </Link>
          <Link to={"/overview"}>
            <button className="w-[238px] h-[40px] flex justify-center items-center gap-2 border border-[#19193D] rounded">
              <img src={pdf} alt="" className="w-[25px] h-[25px]" />
              <p className="text-[#000000] font-normal text-lg">
                Member’s Letter
              </p>
            </button>
          </Link>
        </div>
      </div>
    </HomeLayout>
  );
}

export default RequestApproved;
