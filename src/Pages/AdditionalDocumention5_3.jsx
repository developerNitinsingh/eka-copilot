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

function AdditionalDocumention5_3() {
  return (
    <HomeLayout>
      <div className="min-h-[100vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2 justify-between">
        <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[132px] justify-between">
          <div className="flex gap-3 items-center">
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

        <div className="w-[900px]">
          <InputPrompt />
        </div>
      </div>
    </HomeLayout>
  );
}

export default AdditionalDocumention5_3;
