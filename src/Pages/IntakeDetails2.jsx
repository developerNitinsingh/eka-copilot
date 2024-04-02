import HomeLayout from "../Layouts/HomeLayout";
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
      <div className="min-h-[100vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2 justify-between ">
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
            <select
              name="cars"
              id="cars"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select
              name="cars"
              id="cars"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select
              name="cars"
              id="cars"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select
              name="cars"
              id="cars"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select
              name="cars"
              id="cars"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select
              name="cars"
              id="cars"
              className="w-[434px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <button className="w-[51px] h-[37px] bg-[#98ADFB] flex justify-center items-center rounded">
            <img
              src={rightBigArrow}
              alt=""
              className="w-[16px] h-[12px] hover:bg-[#19193D] transition-all duration-300"
            />
          </button>
        </div>

        <div className="w-[900px]">
          <InputPrompt />
        </div>
      </div>
    </HomeLayout>
  );
}

export default IntakeDetails2;
