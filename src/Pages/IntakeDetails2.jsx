import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import {
  cardGroup,
  leftArrow,
  optionThreeDot,
  rightArrow,
  rightBigArrow,
} from "../assets/Images";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";

function IntakeDetails2() {
  return (
    <HomeLayout>
      <div className="min-h-[80vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2 justify-between ">
        <div className="flex flex-col gap-4 items-end">
          <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[70px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
              <p className=" text-[#19193D]  text-center flex gap-2 font-normal text-lg">
                Plan details for{" "}
                <span className="text-[#98ADFB] font-medium">
                  True Blue Pro 01
                </span>{" "}
                added. 'Now let's add
                <span className="text-[#98ADFB] font-medium text-lg">
                  Intake Details
                </span>
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>

          <div className="bg-[#F9F9F9] grid grid-cols-2 gap-3 w-[900px] h-[270px] py-4 justify-items-center px-2">
            <input
              type="text"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
              placeholder="D123 - Lymphoma"
            />
            <input
              type="text"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
              placeholder="D123 - Lymphoma"
            />
            <input
              type="text"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
              placeholder="D123 - Lymphoma"
            />
            <input
              type="text"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
              placeholder="D123 - Lymphoma"
            />
            <input
              type="text"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
              placeholder="D123 - Lymphoma"
            />
            <input
              type="text"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
              placeholder="D123 - Lymphoma"
            />
          </div>
          <Link to={"/provider-details-3"}>
            <button className="w-[51px] h-[37px] bg-[#98ADFB] flex justify-center items-center rounded hover:bg-[#19193D] transition-all duration-300">
              <img src={rightBigArrow} alt="" className="w-[16px] h-[12px] " />
            </button>
          </Link>
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
            <Link to={"/provider-details-3"}>
              <button className="bg-[#889CE7] rounded-md w-[35px] h-[35px] flex justify-center items-center shadow-md disabled:opacity-85 ">
                <img src={send} alt="" className="w-[17px] h-[17px]" />
              </button>
            </Link>
            <input type="file" name="" id="files" className="hidden" />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default IntakeDetails2;
