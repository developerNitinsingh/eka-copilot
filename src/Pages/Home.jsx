import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { chatIcon, chatLogo, logo, media, send } from "../assets/Images";
import InputPrompt from "../Components/InputPrompt";
import { Link } from "react-router-dom";

function Home() {
  return (
    // <HomeLayout>
    //   <main className="my-5 shadow-2xl h-[100vh] w-full flex justify-center items-center flex-col ">
    //     <img src={chatIcon} alt="" className="w-[55px] h-[54px]  " />
    //     <p className="text-2xl font-normal text-[#000000] w-[380px] text-center">
    //       Welcome to Prior Auth Assistant! How can I assist you today?
    //     </p>
    //     <div className="w-3/4">
    //       <InputPrompt className={""} />
    //     </div>
    //   </main>
    // </HomeLayout>

    <HomeLayout>
      <main className="min-h-screen my-5 shadow-2xl w-full flex justify-center items-center flex-col py-5 gap-2  ">
        <div className="flex flex-col items-center">
          <img src={chatIcon} alt="" className="w-[55px] h-[54px]  " />
          <p className="text-2xl font-normal text-[#000000] w-[380px] text-center">
            Welcome to Prior Auth Assistant! How can I assist you today?
          </p>
        </div>

        <div className="w-[900px]">
          <InputPrompt />
        </div>
      </main>
    </HomeLayout>
  );
}

export default Home;
