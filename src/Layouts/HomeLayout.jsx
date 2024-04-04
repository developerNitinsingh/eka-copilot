import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineProfile } from "react-icons/ai";
import {
  closeCollapse,
  collapse,
  dashboard,
  doc,
  history,
  logo,
  namedLogo,
  openCollapse,
  profilePic,
} from "../assets/Images";
import DashboardExpension from "../Components/DashboardExpenstion/DashboardExpension";

function HomeLayout({ children }) {
  const [isToggled, setIsToggled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsToggled((isToggled) => !isToggled);
  }

  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="max-h-screen flex  gap-3  relative homelayout ">
      {!isToggled && (
        <div className={`w-fit ml-3  bg-[#FFFFFF] h-auto `}>
          <img src={logo} alt="" className="w-[93px] h-[95px]" />

          <div
            className={`h-[100vh]  w-full p-4 text-center  flex flex-col justify-between items-center relative  rounded-xl  outer-shadow `}
          >
            <div className=" flex gap-2 flex-col   ">
              <div className="bg-white  shadow-lg p-2 rounded">
                <img src={doc} alt="" className=" h-[24px] w-[24px] " />
              </div>
              <div className="bg-white  shadow-lg p-2 rounded">
                <img src={history} alt="" className=" h-[24px] w-[24px]" />
              </div>
              {isOpen && (
                <div className={` absolute top-3 left-24 overflow-hidden `}>
                  <DashboardExpension />
                </div>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <div
                className="bg-white  shadow-lg p-2 rounded"
                onClick={handleClick}
              >
                <img src={openCollapse} alt="" className=" h-[24px] w-[24px]" />
              </div>
              <div
                className="bg-white  shadow-lg p-2 rounded"
                onClick={handleOpen}
              >
                <img src={dashboard} alt="" className=" h-[24px] w-[24px] " />
              </div>
            </div>
          </div>
        </div>
      )}
      {isToggled && (
        <div className="w-fit bg-[#FFFFFF] shadow-inner h-auto ">
          <div className="flex justify-between items-center gap-3 m-5 ">
            <img src={namedLogo} alt="" className="w-[237.79px] h-[36.13px]" />
            <img
              src={closeCollapse}
              alt=""
              className="w-[24px] h-[23px]"
              onClick={handleClick}
            />
          </div>
          <div className="flex flex-col   h-[90%] items-center justify-between p-2 pb-10 ">
            {/* 1st div */}

            {/* // */}
            <div className="flex flex-col gap-7 items-center ">
              <button className="flex gap-1 items-center text-lg font-medium bg-[#19193D] px-5 text-center rounded h-12 w-60 text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#19193D] hover:shadow-md">
                {" "}
                <AiOutlineUser className="" />
                <span className=" text-lg font-medium">Collabration Hub </span>
              </button>

              {!isOpen && (
                <div className="flex flex-col gap-2">
                  <h4 className="text-[#19193D] text-lg font-medium ml-5">
                    Thread History
                  </h4>
                  <p className="text-[#FD6262] font-normal text-base ml-5">
                    Yesterday
                  </p>
                  <ul className="list-disc ml-14 flex flex-col gap-2">
                    <li className="text-[#19193D]">Start new request</li>
                    <li className="text-[#19193D]">Edit request</li>
                    <li className="text-[#19193D]">
                      Status of request 0123...
                    </li>
                  </ul>

                  <p className="text-[#FD6262] font-normal text-base ml-5">
                    Yesterday
                  </p>
                  <ul className="list-disc ml-14 flex flex-col gap-2">
                    <li className="text-[#19193D]">Letter of acceptance</li>
                    <li className="text-[#19193D]">Start new request</li>
                    <li className="text-[#19193D]">Delete request</li>
                  </ul>
                </div>
              )}

              {isOpen && (
                <div
                  className={` absolute ${
                    isOpen ? "inline-block" : "hidden"
                  } top-3 left-2 overflow-hidden `}
                >
                  <DashboardExpension />
                </div>
              )}
            </div>

            <button
              className="flex gap-2 items-center text-lg font-medium bg-[#19193D] px-5 text-center rounded h-12 w-60 justify-center text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#19193D] hover:shadow-md "
              onClick={handleOpen}
            >
              {" "}
              {/* <img src={dashboard} alt="" className="w-[17px] h-[20px]" />{" "} */}
              <AiOutlineProfile
                className="w-[17px] h-[20px]  font-medium"
                size={"50"}
              />
              <span className=" text-lg font-medium"> Dashboard</span>
            </button>
          </div>
        </div>
      )}
      {/* {isOpen && (
        <div
          className={` absolute top-3 left-24 overflow-hidden ${
            isOpen ? "inline-block" : "hidden"
          } `}
        >
          <DashboardExpension />
        </div>
      )} */}
      <div className=" w-full m-5 ">
        <div className="flex justify-between w-full ">
          <h1 className="font-medium text-4xl text-[#19193D]  ">EKA Copilot</h1>
          <img src={profilePic} alt="" className="w-[46px] h-[46px]" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;
