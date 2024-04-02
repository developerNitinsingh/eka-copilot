import React from "react";
import { line } from "../assets/Images";

function RequestPreview6_1() {
  return (
    <div className="bg-white min-h-[100vh] flex flex-col justify-around h-auto">
      <div className="bg-[#F3F5FF] h-[98px] w-full flex justify-end items-center">
        <div className="flex justify-around w-[70%]">
          <p className="text-[#19193D] font-normal text-[22px] ">
            Auth Number: cc23685147
          </p>
          <button className="text-lg font-normal text-center w-[169px] h-[38px]  text-[#19193D] border border-[#19193D] rounded ">
            Close Request
          </button>
        </div>
      </div>

      <div className="flex gap-5 items-center justify-center">
        <p className="text-[#19193D] font-semibold text-lg ">
          Patient & Provider Information
        </p>
        <img src={line} alt="" className="w-[916px] h-[2PX] " />
      </div>
    </div>
  );
}

export default RequestPreview6_1;
