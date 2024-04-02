import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import {
  cardGroup,
  leftArrow,
  optionThreeDot,
  profilePic,
  rightArrow,
  searchResultCards,
} from "../assets/Images";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";

function RequestHistory() {
  return (
    <HomeLayout>
      <div className="min-h-[80vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex  items-center  w-[900px] px-2 gap-3  rounded h-[90px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
              <p className="text-2xl font-normal text-[#000000]   flex gap-2 flex-col">
                <span className="text-[#FD6262] font-medium text-xl">
                  EKA Copilot
                </span>
                <span className="text-[#19193D] font-normal text-lg">
                  Member ID confirmed. Here are the existing Prior Authorization
                  request details:
                </span>
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>

          <div className="flex justify-around items-center">
            <img
              src={searchResultCards}
              alt=""
              className="w-[782px] h-[484px]"
            />
          </div>

          <div className="flex  items-center bg-gradient-to-l from-[#19193D] to-[#F9F9F9]  w-[900px] px-2 gap-3 shadow-md rounded-lg h-[80px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={profilePic} alt="" className="w-[54px] h-[54px]  " />
              <p className="text-2xl font-normal text-[#000000]  flex-col flex gap-1">
                <span className="text-[#FD6262] font-medium text-xl">
                  Anurag C.
                </span>
                <span className="text-[#19193D] font-normal text-lg">
                  Start New Request
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%]">
          <InputPrompt className={""} />
        </div>
      </div>
    </HomeLayout>
  );
}

export default RequestHistory;
