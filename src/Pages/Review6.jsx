import HomeLayout from "../Layouts/HomeLayout";
import {
  blueDot,
  cardGroup,
  leftArrow,
  lightBlueDot,
  optionThreeDot,
  profilePic,
  rightArrow,
  rightBigArrow,
  rx,
  searchIcon,
  upload,
  word,
} from "../assets/Images";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";
import { Link } from "react-router-dom";

function Review6() {
  return (
    <HomeLayout>
      <div className="min-h-[82vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2 justify-between">
        <div className="flex flex-col items-center gap-5">
          <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[88px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
              <p className="text-2xl font-normal text-[#19193D]   flex flex-col gap-1">
                <span className="text-[#19193D] font-normal text-lg">
                  Smart decision! The submission has been saved as Draft and a
                  real-time eligibility check has been performed. This aligns
                  with the patient's insurance coverage.
                </span>
                <span className="text-[#19193D] font-normal text-lg">
                  Please verify the details one final time and submit the
                  request.
                </span>
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>

          <div className="flex  gap-5  mt-6">
            <Link to={"/requestApproved"}>
              <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
                Submit For Review
              </button>
            </Link>

            <Link to={"/RequestPreview6"}>
              <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
                Preview
              </button>
            </Link>

            <Link to={"/additionalDocuments5-2"}>
              <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
                Back
              </button>
            </Link>
          </div>

          <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[79px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
              <p className="text-lg font-normal text-[#19193D]   flex flex-col gap-1">
                The request has been submitted. A decision will be made shortly.
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>
        </div>

        <div className="w-[900px]">
          <InputPrompt />
        </div>
      </div>
    </HomeLayout>
  );
}

export default Review6;
