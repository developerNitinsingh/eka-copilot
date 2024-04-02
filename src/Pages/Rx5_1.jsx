import HomeLayout from "../Layouts/HomeLayout";
import {
  blueDot,
  cardGroup,
  leftArrow,
  lightBlueDot,
  optionThreeDot,
  rightArrow,
  rightBigArrow,
  rx,
  searchIcon,
} from "../assets/Images";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";

function Rx5_1() {
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
              <div className="flex flex-col mx-auto  text-start gap-5 hover:bg-gradient-to-l from-[#CCD5F8] to-[#98ADFB] py-3 px-3 rounded  w-[617px]   z-20 h-[342px] left-1/3 bg-[#FFFFFF] border">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="flex flex-col ">
                      <span className="text-[#19193D] font-medium text-[22px]">
                        ZYBDD 2.5mg Tablet
                      </span>
                      <span className="text-[#19193D] font-light text-base">
                        Drug name
                      </span>
                    </p>
                    <p className="flex flex-col ">
                      <span className="text-[#19193D] font-medium text-[22px]">
                        090078601
                      </span>
                      <span className="text-[#19193D] font-light text-base">
                        Drug code
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <img src={rx} alt="" className="w-[60px] h-[60px]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="date"
                      name=""
                      id=""
                      className="w-[285px] h-[43px] bg-[#F9F9F9] text-[#19193D] font-light text-base rounded"
                    />
                    <input
                      type="date"
                      name=""
                      id=""
                      className="w-[285px] h-[43px] bg-[#F9F9F9] text-[#19193D] font-light text-base rounded"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Standard"
                      className="w-[285px] h-[43px] bg-[#F9F9F9] text-[#19193D] font-light text-base rounded"
                    />
                    <input
                      type="text"
                      placeholder="10mg"
                      className="w-[285px] h-[43px] bg-[#F9F9F9] text-[#19193D] font-light text-base rounded"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="BD"
                      className="w-[285px] h-[43px] bg-[#F9F9F9] text-[#19193D] font-light text-base rounded"
                    />
                    <input
                      type="text"
                      placeholder="Oral"
                      className="w-[285px] h-[43px] bg-[#F9F9F9] text-[#19193D] font-light text-base rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src={blueDot} alt="" className="w-[13px] h-[13px]" />
                <img src={lightBlueDot} alt="" className="w-[10px] h-[10px]" />
              </div>
            </div>
          </div>
          <div className="flex  gap-5 ">
            <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
              Accept Alternative
            </button>
            <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
              Keep Original
            </button>
            <button className="w-[171px] h-[37px] bg-[#98ADFB] text-[#FFFFFF] hover:bg-[#19193D] rounded">
              Consult
            </button>
          </div>
        </div>

        <div className="w-[900px]">
          <InputPrompt />
        </div>
      </div>
    </HomeLayout>
  );
}

export default Rx5_1;
