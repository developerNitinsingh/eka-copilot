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
import InputPrompt from "../Components/InputPrompt";

function ProviderDetail3_1() {
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

          <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[70px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={profilePic} alt="" className="w-[54px] h-[54px]  " />
              <p className=" text-[#19193D]  text-center flex gap-2 font-normal text-lg">
                I want to edit provider’s detail.
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

export default ProviderDetail3_1;
