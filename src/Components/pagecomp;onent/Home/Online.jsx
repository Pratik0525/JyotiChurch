import React from "react";

function Online() {
  return (
    <div className="h-screen bg-gray-100 ">
      <div className="flex ">
        <div className="w-8/12 bg-gray-25 flex flex-col justify-center items-center gap-10 h-screen">
          <div className=" text-center ">
            <h1 className="text-5xl w-[600px] text-black font-bold">
              Give Online
            </h1>
          </div>
          <div className="w-5/6 text-2xl text-center ">
            <p className="text-[#000] font-semibold ">
              Tithe and give offerings with our online giving system.
            </p>
            <p className=" text-[#7f8080] mt-5">
              {" "}
              Give a one-time gift without an account. Schedule repeat giving
              with an account. Give online via our secure form or use your phone
              by sending a text. 5 minutes is all it takes to get started.
            </p>
          </div>
          <div className=" flex gap-4">
            <button
              className="border-2 p-3 border-transparent rounded-3xl bg-[#3d80f1] hover:bg-[#ca3892] h-12 w-fit font-semibold text-white
                hover:-translate-y-2 dsad
                transition-all duration-300 ease-in shadow-md shadow-gray-400  bg-blend-hue"
            >
              START GIVING
            </button>
          </div>
        </div>
        <div className="w-4/12  ">
          <img
            className="w-full h-96 mt-32 rounded-tl-[84px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[200px] "
            src=".\src\assets\9.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Online;
