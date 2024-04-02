import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import { Link } from "react-router-dom";

function Page00() {
  return (
    <HomeLayout>
      <main className="min-h-[80vh] my-5 shadow-2xl h-auto w-full flex justify-center items-center flex-col py-5 gap-2 ">
        <div className="flex flex-col items-center">
          <Link to={"/request-started-01"}>
            <img src={chatIcon} alt="" className="w-[55px] h-[54px]  " />
          </Link>
          <p className="text-2xl font-normal text-[#000000] w-[380px] text-center">
            Welcome to Prior Auth Assistant! How can I assist you today?
          </p>
        </div>

        <div className="">
          <img src={table} alt="" className="w-[900px] " />
        </div>

        <div className="flex w-[900px] justify-between items-center border border-[#AEAEAE] h-[54px] rounded-lg px-2 mt-9 shadow-md">
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
            <button className="bg-[#889CE7] rounded-md w-[35px] h-[35px] flex justify-center items-center shadow-md ">
              <img src={send} alt="" className="w-[17px] h-[17px]" />
            </button>
            <input type="file" name="" id="files" className="hidden" />
          </div>
        </div>
      </main>
    </HomeLayout>
  );
}

export default Page00;
