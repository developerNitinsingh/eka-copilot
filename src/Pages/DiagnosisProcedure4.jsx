import HomeLayout from "../Layouts/HomeLayout";
import {
  cardGroup,
  leftArrow,
  optionThreeDot,
  rightArrow,
  rightBigArrow,
} from "../assets/Images";
import { chatIcon, chatLogo, logo, media, send, table } from "../assets/Images";
import { Link } from "react-router-dom";

function DiagnosisProcedure4() {
  return (
    <HomeLayout>
      <div className="min-h-[80vh] my-5 shadow-2xl h-auto w-full flex  items-center flex-col py-5 gap-2 justify-between ">
        <div className="flex flex-col gap-4 items-end">
          <div className="flex  items-center border border-[#AEAEAE] w-[900px] px-2 gap-3 shadow-md rounded h-[70px] justify-between">
            <div className="flex gap-3 items-center">
              <img src={chatIcon} alt="" className="w-[54px] h-[54px]  " />
              <p className=" text-[#19193D]  text-center flex gap-2 font-normal text-lg">
                <span className="text-[#19193D] font-normal">
                  Woo-hoo!! You are a rock star. Now, let's specify the
                </span>{" "}
                <span className="text-[#98ADFB] font-bold text-lg">
                  Diagnosis and Procedure codes.
                </span>
              </p>
            </div>
            <div className="bg-white rounded shadow w-[30px] h-[30px] flex items-center justify-center">
              <img src={optionThreeDot} alt="" className="w-[3px] h-[18px]" />
            </div>
          </div>

          <div className=" mx-auto flex gap-3 flex-col">
            <div className="bg-[#F9F9F9] w-[900px] h-[134px] rounded-lg p-3 flex flex-col gap-6">
              <p className="text-[#19193D] font-normal text-xl ">
                Primary <span className="text-red-500">*</span>
              </p>
              <div className="flex gap-2">
                <select
                  name="cars"
                  id="cars"
                  className="w-[352px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
                >
                  <option value="D123 - Lymphoma">D123 - Lymphoma</option>
                  <option value="D652 - Lorem ipsom xyz">
                    D652 - Lorem ipsom xyz
                  </option>
                  <option value="D852 - Abc xyz chroni">
                    D852 - Abc xyz chronic
                  </option>
                  <option value="D789 - Arthritis">D789 - Arthritis</option>
                  <option value="D999 - Benign tumor">
                    D999 - Benign tumor
                  </option>
                </select>
                <select
                  name="cars"
                  id="cars"
                  className="w-[540px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
                >
                  <option value="P951 - Chemotherapy">
                    P951 - Chemotherapy
                  </option>
                  <option value="P741 - Radiation therapy (radiotherapy)">
                    P741 - Radiation therapy (radiotherapy)
                  </option>
                  <option value="P753 - Monoclonal antibodies">
                    P753 - Monoclonal antibodies
                  </option>
                </select>
              </div>
            </div>
            <div className="bg-[#F9F9F9] w-[900px] h-[134px] rounded-lg p-3 flex flex-col gap-6">
              <p className="text-[#19193D] font-normal text-xl ">Secondary</p>
              <div className="flex gap-2">
                <select
                  name="cars"
                  id="cars"
                  className="w-[352px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
                >
                  <option value="D123 - Lymphoma">D123 - Lymphoma</option>
                  <option value="D652 - Lorem ipsom xyz">
                    D652 - Lorem ipsom xyz
                  </option>
                  <option value="D852 - Abc xyz chroni">
                    D852 - Abc xyz chronic
                  </option>
                  <option value="D789 - Arthritis">D789 - Arthritis</option>
                  <option value="D999 - Benign tumor">
                    D999 - Benign tumor
                  </option>
                </select>
                <select
                  name="cars"
                  id="cars"
                  className="w-[540px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
                >
                  <option value="P951 - Chemotherapy">
                    P951 - Chemotherapy
                  </option>
                  <option value="P741 - Radiation therapy (radiotherapy)">
                    P741 - Radiation therapy (radiotherapy)
                  </option>
                  <option value="P753 - Monoclonal antibodies">
                    P753 - Monoclonal antibodies
                  </option>
                </select>
              </div>
            </div>
            <div className="bg-[#F9F9F9] w-[900px] h-[134px] rounded-lg p-3 flex flex-col gap-6">
              <p className="text-[#19193D] font-normal text-xl ">Secondary</p>
              <div className="flex gap-2">
                <select
                  name="cars"
                  id="cars"
                  className="w-[352px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
                >
                  <option value="D123 - Lymphoma">D123 - Lymphoma</option>
                  <option value="D652 - Lorem ipsom xyz">
                    D652 - Lorem ipsom xyz
                  </option>
                  <option value="D852 - Abc xyz chroni">
                    D852 - Abc xyz chronic
                  </option>
                  <option value="D789 - Arthritis">D789 - Arthritis</option>
                  <option value="D999 - Benign tumor">
                    D999 - Benign tumor
                  </option>
                </select>
                <select
                  name="cars"
                  id="cars"
                  className="w-[540px] h-[43px] rounded border border-[#AEAEAE] bg-[#FFFFFF]"
                >
                  <option value="P951 - Chemotherapy">
                    P951 - Chemotherapy
                  </option>
                  <option value="P741 - Radiation therapy (radiotherapy)">
                    P741 - Radiation therapy (radiotherapy)
                  </option>
                  <option value="P753 - Monoclonal antibodies">
                    P753 - Monoclonal antibodies
                  </option>
                </select>
              </div>
            </div>
          </div>
          <Link to={"/procedure-5"}>
            <button className="w-[51px] h-[37px] bg-[#98ADFB] flex justify-center items-center rounded hover:bg-[#19193D] transition-all duration-300">
              <img
                src={rightBigArrow}
                alt=""
                className="w-[16px] h-[12px] hover:bg-[#19193D] transition-all duration-300"
              />
            </button>
          </Link>
        </div>

        <div
          className={`flex w-[900px] justify-between items-center border border-[#AEAEAE] h-[54px] rounded-lg px-2 mt-9 } shadow-md`}
        >
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
            <Link to={"/procedure-5"}>
              <button className="bg-[#889CE7] rounded-md w-[35px] h-[35px] flex justify-center items-center shadow-md hover:bg-[#bbc3e0] ">
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

export default DiagnosisProcedure4;
