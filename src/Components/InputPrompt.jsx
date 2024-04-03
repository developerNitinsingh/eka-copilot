import React from "react";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import { Link } from "react-router-dom";

function InputPrompt({ className }) {
  return (
    <div
      className={`flex w-full justify-between items-center border border-[#AEAEAE] h-[54px] rounded-lg px-2 mt-9 ${className} shadow-md`}
    >
      <div className="flex items-center gap-2">
        <img src={chatLogo} alt="" className="w-[43px] h-[35px] " />
        <input
          type="text"
          className="w-[310px] h-[21px] bg-white text-[#AEAEAE] border-none outline-none"
          placeholder="Let Eka Co-pilot help you... Ask anything"
        />
      </div>
      <div className="flex gap-2">
        <label
          className="bg-[#FFFFFF] rounded-md w-[35px] h-[35px] flex justify-center items-center shadow-md"
          htmlFor="files"
        >
          <img src={media} alt="" className="w-[11px] h-[22px]" />
        </label>
        <Link to={"/additionalDocumention5-3"}></Link>
        <button className="bg-[#889CE7] rounded-md w-[35px] h-[35px] flex justify-center items-center shadow-md ">
          <img src={send} alt="" className="w-[17px] h-[17px]" />
        </button>
        <input type="file" name="" id="files" className="hidden" />
      </div>
    </div>
  );
}

export default InputPrompt;
