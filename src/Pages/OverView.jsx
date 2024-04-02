import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import {
  cardGroup,
  leftArrow,
  optionThreeDot,
  rightArrow,
} from "../assets/Images";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";

function OverView() {
  return (
    <HomeLayout>
      <div className="min-h-[80vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2">
        <div className="flex flex-col gap-4">
          <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[70px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
              <p className="text-2xl font-normal text-[#000000]  text-center flex gap-2">
                <span className="text-[#19193D] font-bold text-lg">
                  Here are your details for
                </span>
                <span className="text-[#98ADFB] font-bold text-lg">
                  Authorization Number ABC1234569
                </span>
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>
          <ul className="flex gap-4 justify-center">
            <li className="text-[#FD6262] font-normal text-base">
              Plan Details
            </li>
            <li className="text-[#19193D] font-light text-base">
              Intake details
            </li>
            <li className="text-[#19193D] font-light text-base">Providers</li>
            <li className="text-[#19193D] font-light text-base">Diagnosis</li>
            <li className="text-[#19193D] font-light text-base">
              Procedure & Rx
            </li>
            <li className="text-[#19193D] font-light text-base">
              Request Review
            </li>
            <li className="text-[#19193D] font-light text-base">Letters</li>
            <li className="text-[#19193D] font-light text-base">Notes</li>
            <li className="text-[#19193D] font-light text-base">Attachment</li>
          </ul>

          <div className="flex justify-around items-center">
            <img src={leftArrow} alt="" className="w-[10px] h-[18px]" />
            <img src={cardGroup} alt="" className="w-[706px] h-[489px]" />
            <img src={rightArrow} alt="" className="w-[10px] h-[18px]" />
          </div>
        </div>

        <InputPrompt className={"w-[900px]"} />
      </div>
    </HomeLayout>
  );
}

export default OverView;
