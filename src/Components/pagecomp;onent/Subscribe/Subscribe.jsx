import React from "react";

function Subscribe() {
  return (
    <>
      <div className=" h-fit py-14 bg-gray-50">
        <div className=" flex h-fit ">
          <div className="h-64 w-96 rounded-tl-[200px] rounded-tr-[116px] rounded-br-[155px] rounded-bl-[104px] flex justify-center items-center">
            <div className=" w-80 h-52 relative">
              <div>
                <img
                  className="w-80 h-52 absolute top-0 rounded-tl-[200px] rounded-tr-[116px] rounded-br-[155px] rounded-bl-[104px] "
                  src=".\src\assets\6.jpg"
                ></img>
              </div>
              <div className=" absolute top-0 bg-black opacity-80 w-80 h-52 rounded-tl-[200px] rounded-tr-[116px] rounded-br-[155px] rounded-bl-[104px]      ">
                {" "}
              </div>
              <div>
                <p className="text-3xl font-bold absolute top-10 left-24 text-white ">
                  {" "}
                  Plan a Visit
                </p>
                <p className=" text-white absolute top-20 left-10 w-64 text-center">
                  Let us show you what to expect before you come. We'd love to
                  have you this Sunday.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-4/12 flex flex-col gap-7 items-center">
            <div className="   flex shadow-md shadow-gray-200 w-80 overflow-hidden rounded-lg h-20">
              <div className="w-4/12 bg-blue-500">
                <img src=".\src\assets\9.jpg" className=" w-full h-20"></img>
              </div>
              <div className="w-8/12 bg-white pl-3 pt-1">
                <div>
                  <a
                    href=""
                    className="text-[#ca3892] font-bold hover:text-[#3d80f1]  transition-all ease-in duration-300 "
                  >
                    {" "}
                    Pastor's Bible Study{" "}
                  </a>{" "}
                </div>
                <div className="flex gap-3 mt-2 items-center">
                  <div>
                    <button className="text-[13px] border-2 border-transparent w-fit rounded-lg p-1 bg-yellow-200 ">
                      Jun 21,2019
                    </button>
                  </div>
                  <div className="text-[13px]"> 7:00 pm - 8:00 pm</div>
                </div>
              </div>
            </div>

            <div className="   flex shadow-md shadow-gray-200 w-80 overflow-hidden rounded-lg h-20">
              <div className="w-4/12 bg-blue-500">
                <img src=".\src\assets\8.jpg" className=" w-full h-20"></img>
              </div>
              <div className="w-8/12 bg-white pl-3 pt-1">
                <div>
                  <a
                    href=""
                    className="text-[#ca3892] font-bold hover:text-[#3d80f1]  transition-all ease-in duration-300 "
                  >
                    {" "}
                    Teaching Series{" "}
                  </a>{" "}
                </div>
                <div className="flex gap-3 mt-2 items-center">
                  <div>
                    <button className="text-[13px] border-2 border-transparent w-fit rounded-lg p-1 bg-yellow-200 ">
                      Jun 21,2019
                    </button>
                  </div>
                  <div className="text-[13px]"> 7:00 pm - 8:00 pm</div>
                </div>
              </div>
            </div>

            <div className="   flex shadow-md shadow-gray-200 w-80  overflow-hidden rounded-lg h-20">
              <div className="w-4/12 bg-blue-500">
                <img src=".\src\assets\6.jpg" className=" w-full h-20"></img>
              </div>
              <div className="w-8/12 bg-white pl-3 pt-1">
                <div>
                  <a
                    href=""
                    className="text-[#ca3892] font-bold hover:text-[#3d80f1]  transition-all ease-in duration-300 "
                  >
                    {" "}
                    Children's Night{" "}
                  </a>{" "}
                </div>
                <div className="flex gap-3 mt-2 items-center">
                  <div>
                    <button className="text-[13px] border-2 border-transparent w-fit rounded-lg p-1 bg-yellow-200 ">
                      Jun 21,2019
                    </button>
                  </div>
                  <div className="text-[13px]"> 7:00 pm - 8:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-4/12 pl-3 pt-3 ">
            <div className="flex flex-col gap-6 w-11/12">
              <div>
                <p className="text-xl text-[#6b6b6b]">
                  <b className="text-[#555]">Subscribe to our newsletter </b>{" "}
                  for the latest news and updates from our pawfwstor.
                </p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter any message"
                  className="w-80 h-12 border-2 p-2 placeholder:text-gray-400 uppercase placeholder:text-sm  rounded-3xl linercolor1 cursor-text"
                />
              </div>
              <div className="w-">
                <button className="border-2 bg-[#3d80f1] border-transparent px-4 hover:-translate-y-3 hover:bg-[#ca3892]  rounded-3xl transition-all duration-400 ease-in-out delay-100 text-white  h-11 w-fit font-bold text-sm">
                  SUBSCRIBE
                </button>
              </div>
              <div>
                <p>
                  {" "}
                  <b>Tip: </b>Use the free{" "}
                  <a
                    href=""
                    className="text-[#ca3892] hover:text-[#3d80f1] transition-all delay-100 duration-200 ease-in"
                  >
                    MC4WP{" "}
                  </a>
                  plugin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
