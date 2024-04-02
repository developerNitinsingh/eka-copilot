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

function SelectPlan() {
  return (
    <HomeLayout>
      <div className="min-h-[100vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2 justify-between">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[88px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
              <p className="text-2xl font-normal text-[#000000]   flex flex-col gap-1">
                <span className="text-[#19193D] font-normal text-lg">
                  Great! Let's continue with the new request.
                </span>
                <span className="text-[#19193D] font-normal text-lg">
                  Please provide required details of the{" "}
                  <span className="text-[#98ADFB]">Health Plan</span> covering
                  this request.
                </span>
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>

          <div className=" flex flex-col gap-4 ">
            <p className="text-left">Please select plan :</p>

            <div className="flex gap-4">
              <div className="bg-[#889CE7] inline-block w-fit p-1 px-2 rounded ">
                <p className="flex flex-col text-[#19193D]">
                  <span className="font-light text-sm">Plan</span>
                  <span className="font-normal text-sm"> True Blue Pro 01</span>
                </p>
                <div className="text-[#19193D]">
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">LOB:</span>
                    <span className="font-normal text-sm">BLUE ADVANTAGE</span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Company: N/A</span>
                    <span className="font-normal text-sm">BLUE ADVANTAGE</span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Sub Group:</span>
                    <span className="font-normal text-sm">
                      WALMART CONTRBTN 24 AC
                    </span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Group:</span>
                    <span className="font-normal text-sm">
                      WALMART CONTRIBUTION 24 Contract
                    </span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Class:</span>
                    <span className="font-normal text-sm">
                      WALMART ALL Plan
                    </span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">ID:</span>
                    <span className="font-normal text-sm">AR2448</span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Effective Date:</span>
                    <span className="font-normal text-sm">02/14/2024:</span>
                  </p>
                </div>
              </div>
              <div className="bg-[#889CE7] inline-block w-fit p-1 px-2 rounded ">
                <p className="flex flex-col text-[#19193D]">
                  <span className="font-light text-sm">Plan</span>
                  <span className="font-normal text-sm"> True Blue Pro 01</span>
                </p>
                <div className="text-[#19193D]">
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">LOB:</span>
                    <span className="font-normal text-sm">BLUE ADVANTAGE</span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Company: N/A</span>
                    <span className="font-normal text-sm">BLUE ADVANTAGE</span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Sub Group:</span>
                    <span className="font-normal text-sm">
                      WALMART CONTRBTN 24 AC
                    </span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Group:</span>
                    <span className="font-normal text-sm">
                      WALMART CONTRIBUTION 24 Contract
                    </span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Class:</span>
                    <span className="font-normal text-sm">
                      WALMART ALL Plan
                    </span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">ID:</span>
                    <span className="font-normal text-sm">AR2448</span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Effective Date:</span>
                    <span className="font-normal text-sm">02/14/2024:</span>
                  </p>
                </div>
              </div>
              <div className="bg-[#889CE7] inline-block w-fit p-1 px-2 rounded ">
                <p className="flex flex-col text-[#19193D]">
                  <span className="font-light text-sm">Plan</span>
                  <span className="font-normal text-sm"> True Blue Pro 01</span>
                </p>
                <div className="text-[#19193D]">
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">LOB:</span>
                    <span className="font-normal text-sm">BLUE ADVANTAGE</span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Company: N/A</span>
                    <span className="font-normal text-sm">BLUE ADVANTAGE</span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Sub Group:</span>
                    <span className="font-normal text-sm">
                      WALMART CONTRBTN 24 AC
                    </span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Group:</span>
                    <span className="font-normal text-sm">
                      WALMART CONTRIBUTION 24 Contract
                    </span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Class:</span>
                    <span className="font-normal text-sm">
                      WALMART ALL Plan
                    </span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">ID:</span>
                    <span className="font-normal text-sm">AR2448</span>
                  </p>
                  <p className="text-[#19193D]">
                    <span className="font-light text-sm">Effective Date:</span>
                    <span className="font-normal text-sm">02/14/2024:</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[900px]">
          <InputPrompt />
        </div>
      </div>
    </HomeLayout>
  );
}

export default SelectPlan;
