import React, { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import {
  chatIcon,
  edit,
  profilePic,
  rightBigArrow,
  send,
  table,
} from "../assets/Images";
import { optionThreeDot, chatLogo, media } from "../assets/Images";
import { Link, useNavigate } from "react-router-dom";

function EditProviderDetails3_2() {
  const [loading, setLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [prompt, setPrompt] = useState(null);
  const navigate = useNavigate();

  function submitPromt() {
    setShowPrompt(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/diagnosisProcedure-4");
    }, 2000);
  }
  return (
    <HomeLayout>
      <div className="min-h-[80vh] my-5 shadow-2xl h-auto w-full flex   flex-col py-5 justify-between mx-auto items-center">
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
            {prompt && showPrompt && (
              <div className="flex  items-center   w-[900px] px-2 gap-3  rounded h-[70px] justify-between">
                <div className="flex gap-3 items-center">
                  <img
                    src={profilePic}
                    alt=""
                    className="w-[54px] h-[54px]  "
                  />
                  <p className="text-lg font-normal text-[#19193D]  text-center flex gap-2">
                    {prompt}
                  </p>
                </div>
                <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
                  <img
                    src={optionThreeDot}
                    alt=""
                    className="w-[3px] h-[18px]"
                  />
                </div>
              </div>
            )}

            {prompt && showPrompt && (
              <div className="flex  items-center   w-[900px] px-2 gap-3  rounded h-[70px] justify-between">
                <div className="flex gap-3 items-center">
                  <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
                  <p className="text-lg font-normal text-[#19193D]  text-center flex gap-2">
                    Provider details are updated. Please Confirm.
                  </p>
                </div>
                <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
                  <img
                    src={optionThreeDot}
                    alt=""
                    className="w-[3px] h-[18px]"
                  />
                </div>
              </div>
            )}
          </div>

          {prompt && showPrompt && (
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
                    placeholder="NPI"
                  />
                  <input
                    type="text"
                    className="bg-transparent text-right"
                    placeholder="987654"
                  />
                </div>
                <div className="w-[601px] h-[43px] bg-white flex justify-between px-2 rounded border border-[#AEAEAE]">
                  <input
                    type="text"
                    className="bg-transparent"
                    placeholder="Address"
                  />
                  <input
                    type="text"
                    className="bg-transparent text-right"
                    placeholder="Block D, st #1236, NY, USA"
                  />
                </div>
              </div>
              <Link to={"/diagnosisProcedure-4"}>
                <button className="w-[51px] h-[37px] bg-[#98ADFB] flex justify-center items-center rounded mr-8 hover:bg-[#19193D] transition-all duration-300 ">
                  <img
                    src={rightBigArrow}
                    alt=""
                    className="w-[16px] h-[12px]"
                  />
                </button>
              </Link>
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

        <div
          className={`flex w-[895px] justify-between items-center border border-[#AEAEAE] h-[54px] rounded-lg px-2 mt-9  shadow-md`}
        >
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
              className="bg-[#889CE7] rounded-md w-[35px] h-[35px] flex justify-center items-center shadow-md hover:bg-[#bbc3e0] "
              onClick={submitPromt}
              disabled={loading}
            >
              <img src={send} alt="" className="w-[17px] h-[17px]" />
            </button>

            <input type="file" name="" id="files" className="hidden" />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default EditProviderDetails3_2;
