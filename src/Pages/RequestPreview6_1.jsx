import React from "react";
import { card1, card2, card3, card4, card5, line } from "../assets/Images";
import { Link } from "react-router-dom";

function RequestPreview6_1() {
  return (
    <div className="bg-white min-h-[90vh] flex flex-col justify-between gap-8 h-auto items-center ">
      <div className="bg-[#F3F5FF] h-[98px] w-full flex justify-end items-center">
        <div className="flex justify-around w-[70%]">
          <p className="text-[#19193D] font-normal text-[22px] ">
            Auth Number: cc23685147
          </p>
          <Link to={"/Review-6"}>
            <button className="text-lg font-normal text-center w-[169px] h-[38px]  text-[#19193D] border border-[#19193D] rounded ">
              Close Request
            </button>
          </Link>
        </div>
      </div>

      <div className="flex gap-5 items-center justify-center">
        <p className="text-[#19193D] font-semibold text-lg ">
          Patient & Provider Information
        </p>
        <img src={line} alt="" className="w-[916px] h-[2PX] " />
      </div>

      <div className="flex flex-wrap gap-3 items-center w-[90%] mx-auto justify-start ">
        <img src={card1} alt="" className="w-[270px] h-[324px] " />
        <img src={card2} alt="" className="w-[270px] h-[324px] " />
        <img src={card3} alt="" className="w-[270px] h-[324px] " />
        <img src={card4} alt="" className="w-[270px] h-[324px] " />
        <img src={card5} alt="" className="w-[270px] h-[324px] " />
      </div>
    </div>
  );
}

export default RequestPreview6_1;
