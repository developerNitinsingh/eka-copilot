import React, { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import {
  chatIcon,
  chatLogo,
  logo,
  media,
  send,
  profilePic,
} from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [prompt, setPrompt] = useState(null);
  const navigate = useNavigate();

  function submitPromt() {
    setShowPrompt(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/request-started-01");
    }, 2000);
  }
  return (
    // <HomeLayout>
    //   <main className="my-5 shadow-2xl h-[100vh] w-full flex justify-center items-center flex-col ">
    //     <img src={chatIcon} alt="" className="w-[55px] h-[54px]  " />
    //     <p className="text-2xl font-normal text-[#000000] w-[380px] text-center">
    //       Welcome to Prior Auth Assistant! How can I assist you today?
    //     </p>
    //     <div className="w-3/4">
    //       <InputPrompt className={""} />
    //     </div>
    //   </main>
    // </HomeLayout>

    <HomeLayout>
      <main className="max-h-screen h-auto min-h-[80vh] my-5 shadow-2xl w-full flex justify-center items-center flex-col py-5 gap-2  ">
        <div className="flex flex-col items-center gap-8">
          <img src={chatIcon} alt="" className="w-[55px] h-[54px]  " />
          <p className="text-2xl font-normal text-[#000000] w-[380px] text-center">
            Welcome to Prior Auth Assistant! How can I assist you today?
          </p>

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

export default Home;
