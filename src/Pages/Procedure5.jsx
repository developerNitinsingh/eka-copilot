import HomeLayout from "../Layouts/HomeLayout";
import {
  blueDot,
  cardGroup,
  leftArrow,
  lightBlueDot,
  optionThreeDot,
  rightArrow,
  rightBigArrow,
  searchIcon,
} from "../assets/Images";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";
import { Link } from "react-router-dom";

function Procedure5() {
  return (
    <HomeLayout>
      <div className="min-h-[100vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2 justify-between">
        <div className="flex flex-col items-center gap-7 ">
          <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[70px] justify-between bg-gradient-to-l from-[#a59cdc33] to-[#5b4bbb33] ">
            <div className="flex gap-3 items-center">
              <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
              <p className=" text-[#a59cdc]   flex gap-2 font-semibold text-lg">
                Considering the provided diagnosis (D123), here are suggested
                procedure codes commonly approved for similar cases: P789, P234,
                P567.
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            <div className=" flex gap-3 items-center">
              <span className="text-[#FD6262] text-lg font-medium">
                Procedure
              </span>
              <span className="text-[#AEAEAE] text-lg font-normal">Rx</span>
            </div>

            <div className=" absolute right-0 bg-[#FD6262] w-[36px] h-[32px] flex justify-center items-center rounded top-4">
              <img src={searchIcon} alt="" className="" />
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-3 ">
            <div className=" w-full flex flex-col items-center gap-4">
              <div className="flex flex-col mx-auto  text-start gap-5 hover:bg-gradient-to-l from-[#CCD5F8] to-[#98ADFB] py-3 rounded px-2 w-[319px]   z-20 h-[342px] left-1/3 bg-[#FFFFFF] border">
                <h3 className="text-[#000000] text-[22px] font-medium text-start w-[285px]">
                  D123
                </h3>
                <p className="font-light text-base text-[#000000] text-start w-[285px]">
                  <span className="font-bold">P789:</span>Anesthesia Eyelid
                  Reconstructive Procedure
                </p>
                <div className="flex flex-col gap-2 mx-auto">
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="01/01/24"
                    className="bg-[#F9F9F9] w-[285px] h-[43px] rounded text-[#000000] px-2"
                  />
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="01/01/24"
                    className="bg-[#F9F9F9] w-[285px] h-[43px] rounded text-[#000000] px-2"
                  />
                  <input
                    type="text"
                    placeholder="Standard"
                    className="bg-[#F9F9F9] w-[285px] h-[43px] rounded text-[#000000] px-2"
                  />
                  <input
                    type="text"
                    placeholder="2"
                    className="bg-[#F9F9F9] w-[285px] h-[43px] rounded text-[#000000] px-2"
                  />
                </div>
              </div>
              {/* <div className="flex flex-col mx-auto  text-start gap-5 hover:bg-gradient-to-l from-[#CCD5F8] to-[#98ADFB] pb-10 rounded px-2 w-[263px] absolute  h-[281px] top-7 right-1/4 bg-[#FFFFFF] border">
                <h3 className="text-[#000000] text-[22px] font-medium text-start w-[234px]">
                  D123
                </h3>
                <p className="font-light text-base text-[#000000] text-start w-[234px] ">
                  <span className="font-bold">P789:</span>Anesthesia Eyelid
                  Reconstructive Procedure
                </p>
                <div className="flex flex-col gap-2 mx-auto">
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="01/01/24"
                    className="bg-[#F9F9F9] w-[234px] h-[35px] rounded text-[#000000] px-2"
                  />
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="01/01/24"
                    className="bg-[#F9F9F9] w-[234px] h-[35px] rounded text-[#000000] px-2"
                  />
                  <input
                    type="text"
                    placeholder="Standard"
                    className="bg-[#F9F9F9] w-[234px] h-[35px] rounded text-[#000000] px-2"
                  />
                  <input
                    type="text"
                    placeholder="2"
                    className="bg-[#F9F9F9] w-[234px] h-[35px] rounded text-[#000000] px-2"
                  />
                </div>
              </div> */}
              <div className="flex items-center gap-3">
                <img src={blueDot} alt="" className="w-[13px] h-[13px]" />
                <img src={lightBlueDot} alt="" className="w-[10px] h-[10px]" />
              </div>
            </div>
          </div>
          <div className="flex  gap-5 ">
            <Link to={"/additionalDocuments5-2"}>
              <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
                Accept Alternative
              </button>
            </Link>

            <Link to={"/Review-6"}>
              <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
                Keep Original
              </button>
            </Link>

            <Link to={"/additionalDocuments5-2"}>
              <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
                Consult
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[900px]">
          <InputPrompt />
        </div>
      </div>
    </HomeLayout>
  );
}

export default Procedure5;
