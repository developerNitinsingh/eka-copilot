import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import {
  cardGroup,
  leftArrow,
  optionThreeDot,
  profilePic,
  providerDetailsCard1,
  providerDetailsCard2,
  rightArrow,
  rightBigArrow,
  searchIcon,
} from "../assets/Images";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import { useNavigate } from "react-router-dom";

function ProviderDetail3_1() {
  const [loading, setLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [prompt, setPrompt] = useState(null);
  const navigate = useNavigate();

  function submitPromt() {
    setShowPrompt(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/edit-provider-details-3-2");
    }, 2000);
  }
  return (
    <HomeLayout>
      <div className="min-h-[100vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2 justify-between ">
        <div className="flex flex-col gap-4 items-center">
          <div className=" flex flex-col gap-3 items-center">
            <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[70px] justify-between">
              <div className="flex gap-3 items-center">
                <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
                <p className=" text-[#19193D]  text-center flex gap-2 font-normal text-lg">
                  How about adding
                  <span className="text-[#19193D] font-normal">
                    True Blue Pro 01
                  </span>{" "}
                  <span className="text-[#98ADFB] font-bold text-lg">
                    Provider Details now!
                  </span>
                </p>
              </div>
              <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
                <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 w-full ">
              <select
                name="Provider Type"
                id="Provider Type"
                className="w-[295px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
              >
                <option value="volvo">Provider Type</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <div className="w-[595px] h-[43px] border border-[#AEAEAE] flex items-center justify-between px-2 rounded">
                <input
                  type="text"
                  name=""
                  id=""
                  className=" text-[#19193D] w-[378px] h-[19px] text-base font-light bg-transparent outline-none"
                  placeholder="Please select a Type of Provider name, facility or NPI..."
                />
                <div className="bg-[#FD6262] w-[36px] h-[32px] flex justify-center items-center rounded ">
                  <img src={searchIcon} alt="" className=" m-auto " />
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-center">
              <img
                src={providerDetailsCard1}
                alt=""
                className="w-[899px] h-[174px]"
              />
              <img
                src={providerDetailsCard2}
                alt=""
                className="w-[899px] h-[174px]"
              />
            </div>
          </div>

          {/* <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[70px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={profilePic} alt="" className="w-[54px] h-[54px]  " />
              <p className=" text-[#19193D]  text-center flex gap-2 font-normal text-lg">
                I want to edit provider’s detail.
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div> */}

          {prompt && showPrompt && (
            <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[70px] justify-between">
              <div className="flex gap-3 items-center">
                <img src={profilePic} alt="" className="w-[54px] h-[54px]  " />
                <p className="text-lg font-normal text-[#000000]  text-center">
                  {prompt}
                </p>
              </div>
              <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
                <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
              </div>
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
      </div>
    </HomeLayout>
  );
}

export default ProviderDetail3_1;
