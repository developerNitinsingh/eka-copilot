import React, { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import {
  cardGroup,
  leftArrow,
  optionThreeDot,
  rightArrow,
  rightBigArrow,
  profilePic,
} from "../assets/Images";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";

function SelectPlan() {
  const [loading, setLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [prompt, setPrompt] = useState(null);
  const navigate = useNavigate();

  function submitPromt() {
    setShowPrompt(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/intake-details-2");
    }, 2000);
  }
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

          <div className=" flex flex-col gap-4 items-end ">
            <p className="text-left">Please select plan :</p>

            <div className="flex gap-4 ">
              <div className="hover:bg-[#889CE7] bg-[#889ce70d] inline-block w-fit p-1 px-2 rounded ">
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
              <div className="hover:bg-[#889CE7] bg-[#889ce70d] inline-block w-fit p-1 px-2 rounded ">
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
              <div className="hover:bg-[#889CE7] bg-[#889ce70d] inline-block w-fit p-1 px-2 rounded ">
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
            <Link to={"/intake-details-2"}>
              <button className="w-[51px] h-[37px] bg-[#98ADFB] flex justify-center items-center rounded mr-8 hover:bg-[#19193D] transition-all duration-300 ">
                <img src={rightBigArrow} alt="" className="w-[16px] h-[12px]" />
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

        <div className="w-[900px]">
          <div
            className={`flex w-full justify-between items-center border border-[#AEAEAE] h-[54px] rounded-lg px-2 mt-9  shadow-md`}
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
                className="bg-[#889CE7] rounded-md w-[35px] h-[35px] flex justify-center items-center shadow-md hover:bg-[#bbc3e0] disabled:opacity-85 "
                onClick={submitPromt}
                disabled={loading}
              >
                <img src={send} alt="" className="w-[17px] h-[17px]" />
              </button>

              <input type="file" name="" id="files" className="hidden" />
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default SelectPlan;
