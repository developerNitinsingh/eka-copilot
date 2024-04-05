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
import { useState } from "react";
import { Link } from "react-router-dom";

function AdditionalDocuments5_2() {
  const [file, setFile] = useState("");

  const handleFileChange = (event) => {
    let input = event.target.files[0];
    if (!input) return;
    let data = new FormData();
    data.append("fileToUpload", input);
    setFile(data);
  };
  console.log(file);
  return (
    <HomeLayout>
      <div className="min-h-[82vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2 justify-between">
        <div className=" flex flex-col gap-5">
          <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[88px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
              <p className="text-2xl font-normal text-[#19193D]   flex flex-col gap-1">
                <span className="text-[#19193D] font-normal text-lg">
                  Great choice! The procedure codes have been updated. The
                  revised information will be considered in the review process.
                </span>
                <span className="text-[#19193D] font-normal text-lg">
                  Any{" "}
                  <span className="text-[#98ADFB] font-bold">
                    Additional Information or Documents
                  </span>{" "}
                  you'd like to provide?
                </span>
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>

          <div
            className=" flex w-[147px] h-[40px] rounded border border-[#19193D] justify-center items-center "
            // onClick={handleClick}
          >
            <label
              htmlFor="file"
              className="cursor-pointer flex gap-2 items-center  rounded "
            >
              <img src={upload} alt="" className="w-[14px] h-[17px]" />
              <p className="text-[#19193D] font-normal text-lg">Add details</p>
            </label>
            <input
              type="file"
              name=""
              id="file"
              className="hidden"
              // value={isOpen}
              onChange={handleFileChange}
            />
          </div>

          <div
            className={`flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[132px] justify-between ${
              file ? "flex" : "hidden"
            }`}
          >
            <div className={`flex gap-3 items-center`}>
              <img src={profilePic} alt="" className="w-[54px] h-[54px]  " />
              <div className="flex items-center gap-4">
                <div className="w-[118px] h-[85px] bg-[#98adfb17] flex justify-center items-center">
                  <img src={word} alt="" className="w-[39px] h-[39px]" />
                </div>
                <div className="w-[118px] h-[85px] bg-[#98adfb17] flex justify-center items-center">
                  <img src={word} alt="" className="w-[39px] h-[39px]" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>

          <div
            className={`flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[90px] justify-between bg-gradient-to-l from-[#a59cdc33] to-[#5b4bbb33] ${
              file ? "flex" : "hidden"
            }`}
          >
            <div className="flex gap-3 items-center">
              <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
              <p className=" text-[#a59cdc]   flex gap-2 font-semibold text-lg">
                Got it! To strenthen the Prior Auththorization request, consider
                providing additinial documentions such as recent test results ,
                image or details treatment plans related to submitted to
                procedure code(P456)
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>
        </div>
        <div className="flex  gap-5  mt-6">
          <Link to={"/additionalDocumention5-3"}>
            <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
              Upload More
            </button>
          </Link>

          <Link to={"/Review-6"}>
            <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
              Proceed to Review
            </button>
          </Link>

          <Link to={""}>
            <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
              Consult
            </button>
          </Link>
        </div>
        <div className="w-[900px]">
          <InputPrompt />
        </div>
      </div>
    </HomeLayout>
  );
}

export default AdditionalDocuments5_2;
