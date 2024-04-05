import React, { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import {
  chatIcon,
  chatLogo,
  logo,
  media,
  profilePic,
  send,
  table,
} from "../assets/Images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RequestStarted01() {
  const [loading, setLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [prompt, setPrompt] = useState(null);
  const navigate = useNavigate();

  function submitPromt() {
    setShowPrompt(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/select-plan");
    }, 2000);
  }
  console.log(prompt);
  return (
    <HomeLayout>
      <main className="min-h-[80vh] my-5 shadow-2xl h-auto w-full flex justify-center items-center flex-col py-5 gap-5 ">
        <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[70px]">
          <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
          <p className="text-2xl font-normal text-[#000000]  text-center">
            Welcome to Prior Auth Assistant! How can I assist you today?
          </p>
        </div>

        <div className="">
          <img src={table} alt="" className="w-[900px] " />
        </div>

        <div className=" flex flex-col gap-4 items-center">
          <p className="font-normal text-lg text-[#19193D]">
            Would you like to create a new Prior Authorization request?
          </p>
          <div className=" flex justify-center items-center gap-7">
            <Link to={"/select-plan"}>
              <button className="bg-[#008905] rounded shadow-md w-[95px] h-[37px] text-[#FFFFFF] hover:bg-[#19193D] transition-all duration-300">
                Yes
              </button>
            </Link>
            <Link to={"/"}>
              <button className="bg-[#FD6262] rounded shadow-md w-[95px] h-[37px] text-[#FFFFFF] hover:bg-[#19193D] transition-all duration-300">
                No
              </button>
            </Link>
          </div>

          {prompt && showPrompt && (
            <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[70px]">
              <img src={profilePic} alt="" className="w-[54px] h-[54px]  " />
              <p className="text-lg font-normal text-[#000000]  text-center">
                {prompt}
              </p>
            </div>
          )}

          {loading && (
            <div className="flex  items-center justify-center  w-[900px] px-2 gap-3  rounded h-[70px]">
              <span className="loading loading-ring loading-xs"></span>
              <span className="loading loading-ring loading-sm"></span>
              <span className="loading loading-ring loading-md"></span>
              <span className="loading loading-ring loading-lg"></span>
            </div>
          )}
        </div>

        <div className="flex w-[900px] justify-between items-center border border-[#AEAEAE] h-[54px] rounded-lg px-2 mt-9 shadow-md">
          <div className="flex items-center gap-2">
            <img src={chatLogo} alt="" className="w-[43px] h-[35px] " />
            <input
              type="text"
              className="w-[310px] h-[21px] bg-white text-[#AEAEAE] border-none outline-none"
              placeholder="Let Eka Co-pilot help you... Ask anything"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label
              className="bg-[#FFFFFF] rounded-md w-[35px] h-[35px] flex justify-center items-center shadow-md"
              htmlFor="files"
            >
              <img src={media} alt="" className="w-[11px] h-[22px]" />
            </label>
            <button
              className="bg-[#889CE7] rounded-md w-[35px] h-[35px] flex justify-center items-center shadow-md disabled:opacity-85 "
              onClick={submitPromt}
              disabled={loading}
            >
              <img src={send} alt="" className="w-[17px] h-[17px]" />
            </button>
            <input type="file" name="" id="files" className="hidden" />
          </div>
        </div>
      </main>
    </HomeLayout>
  );
}

export default RequestStarted01;
