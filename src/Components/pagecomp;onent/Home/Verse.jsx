import React from "react";

function Verse() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-4/12 bg-gray-50">
        <img
          className="w-full h-96 mt-32 rounded-tl-[121px] flex justify-center items-center rounded-tr-[82px] rounded-br-[70px] rounded-bl-[119px] "
          src=".\src\assets\OIG (3).jpg"
        ></img>
      </div>
      <div className="w-8/12 flex flex-col justify-center items-center bg-gray-50">
        <div className="flex justify-center items-center">
          <p className="text-4xl text-center text w-8/12 italic relative">
            “For the wages of sin is death, but the{" "}
            <a className="w-5 h-10 bg-yellow-200 opacity-75 text-red">
              {" "}
              free gift of God{" "}
            </a>{" "}
            is eternal life in Christ Jesus our Lord.”
          </p>
        </div>
        <div className="mt-6">
          <b className="font-bold text-3xl ">Romans 6:23</b>
        </div>
        <div className=" flex gap-5 mt-10">
          <button
            className="border-2 px-3 border-transparent rounded-3xl bg-[#3d80f1] hover:bg-[#ca3892] h-12 w-fit font-bold text-white
                hover:-translate-y-2 
                transition-all duration-300 ease-in shadow-md shadow-gray-400  bg-blend-hue"
          >
            PLAN A VISIT
          </button>
          <button className="border-2 border-[#ca3892] hover:border-[#3d80f1] hover:text-[#3d80f1]  rounded-3xl transition duration-300 ease-in text-[#ca3892]  h-12 px-3 w-fit font-bold">
            WATCH ONLINE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Verse;
