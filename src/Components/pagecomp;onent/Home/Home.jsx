import React from "react";

function Home() {
  return (
    <div className="h-screen bg-gray-50 ">
      <div className="flex ">
        <div className="w-8/12 bg-gray-25 flex flex-col justify-center items-center gap-10 h-screen">
          <div className="heading relative">
            <h1 className="text-6xl w-[600px] relative z-10 text-black font-bold  text-center">
              Finding{" "}
              <a className="h-2 relative ">
                The Way
                <div className="h-7 w-full -z-10 absolute left-0 right-0 mx-auto bottom-2 bg-opacity-50   bg-yellow-500"></div>
              </a>{" "}
              in GolPark.
            </h1>
          </div>
          <div className="w-5/6 text-2xl text-center text-[#575757]">
            Hey, come join us this <b> Saturday @ bvfgdg 10 am </b>for worship
            and a message from the Bible. We meet in Jyotinagar and would love
            to have you.
          </div>
          <div className=" flex gap-4">
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
        <div className="w-4/12  ">
          <img
            className="w-full h-96 mt-32 rounded-tl-[200px] rounded-tr-[17px] rounded-br-[41px] rounded-bl-[63px] "
            src=".\src\assets\OIG (3).jpg"
          ></img>
        </div>
      </div>
      {/* Mapping */}
      <div></div>
    </div>
  );
}

export default Home;
