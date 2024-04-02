import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import {
  chatIcon,
  edit,
  profilePic,
  rightBigArrow,
  send,
  table,
} from "../assets/Images";
import { optionThreeDot } from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";

function EditProviderDetails3_2() {
  return (
    <HomeLayout>
      <div className="min-h-[90vh] my-5 shadow-2xl h-auto w-full flex   flex-col py-5 justify-between mx-auto items-center">
        <div className="flex flex-col gap-7">
          <div className="shadow-md border border-[#AEAEAE] flex flex-col gap-2 rounded mx-auto">
            <div className="flex  items-center   w-[900px] px-2 gap-3  rounded h-[70px] justify-between">
              <div className="flex gap-3 items-center">
                <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
                <p className="text-2xl font-normal text-[#000000]  text-center flex gap-2">
                  <span className="text-[#19193D] font-normal text-lg">
                    Sure, Please provide the corrected
                  </span>
                  <span className="text-[#98ADFB] font-bold text-lg">
                    Provider Details.
                  </span>
                </p>
              </div>
              <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
                <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
              </div>
            </div>
            <div className="flex  items-center   w-[900px] px-2 gap-3  rounded h-[70px] justify-between">
              <div className="flex gap-3 items-center">
                <img src={profilePic} alt="" className="w-[54px] h-[54px]  " />
                <p className="text-lg font-normal text-[#19193D]  text-center flex gap-2">
                  The new details are: XYZ Hospital, 987654. Please update
                  accordingly
                </p>
              </div>
              <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
                <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
              </div>
            </div>
            <div className="flex  items-center   w-[900px] px-2 gap-3  rounded h-[70px] justify-between">
              <div className="flex gap-3 items-center">
                <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
                <p className="text-lg font-normal text-[#19193D]  text-center flex gap-2">
                  Provider details are updated. Please Confirm.
                </p>
              </div>
              <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
                <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
              </div>
            </div>
          </div>

          <div className="bg-[#F9F9F9] flex flex-col items-end  gap-5 w-[657px] h-[310px] mx-auto py-3">
            <div className="flex justify-between w-[601px] mx-auto">
              <h3 className="text-[#19193D] text-xl font-medium">
                Provider’s Details
              </h3>
              <div className="w-[34px] h-[32px] bg-[#FD6262] rounded flex justify-center items-center">
                <img src={edit} alt="" className="w-[16px] h-[16px]" />
              </div>
            </div>

            <div className=" flex gap-2 flex-col mx-auto">
              <div className="w-[601px] h-[43px] bg-white flex justify-between px-2 rounded border border-[#AEAEAE]">
                <input
                  type="text"
                  className="bg-transparent"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="bg-transparent text-right"
                  placeholder="XYZ Hospital"
                />
              </div>
              <div className="w-[601px] h-[43px] bg-white flex justify-between px-2 rounded border border-[#AEAEAE]">
                <input
                  type="text"
                  className="bg-transparent"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="bg-transparent text-right"
                  placeholder="XYZ Hospital"
                />
              </div>
              <div className="w-[601px] h-[43px] bg-white flex justify-between px-2 rounded border border-[#AEAEAE]">
                <input
                  type="text"
                  className="bg-transparent"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="bg-transparent text-right"
                  placeholder="XYZ Hospital"
                />
              </div>
            </div>

            <button className="w-[51px] h-[37px] bg-[#98ADFB] flex justify-center items-center rounded mr-8 hover:bg-[#19193D] transition-all duration-300 ">
              <img src={rightBigArrow} alt="" className="w-[16px] h-[12px]" />
            </button>
          </div>
        </div>

        <div className="w-[895px]">
          <InputPrompt className={" "} />
        </div>
      </div>
    </HomeLayout>
  );
}

export default EditProviderDetails3_2;
