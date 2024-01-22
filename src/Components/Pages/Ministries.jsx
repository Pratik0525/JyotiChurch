import React from "react";

function Ministries() {
  const ministries = [
    {
      image: "./src/assets/5.jpg",
      topic: "Family Ministry",
      des: "You can use WordPress’s content editor to create pages like this with text, photos, galleries, video, lists, links and styled text. You can insert a gallery into your article that extends outward. Blockquote Example The content area is narrow for optimal readability (comfortable number of characters per line). Certain elements such as blockquotes and images can extend beyond the content area to create a dramatic effect. This demonstrates the effect. For God so loved the world that he gave his one and…",
    },
    {
      image: "./src/assets/5.jpg",
      topic: "Family Ministry",
      des: "You can use WordPress’s content editor to create pages like this with text, photos, galleries, video, lists, links and styled text. You can insert a gallery into your article that extends outward. Blockquote Example The content area is narrow for optimal readability (comfortable number of characters per line). Certain elements such as blockquotes and images can extend beyond the content area to create a dramatic effect. This demonstrates the effect. For God so loved the world that he gave his one and…",
    },
    {
      image: "./src/assets/5.jpg",
      topic: "Family Ministry",
      des: "You can use WordPress’s content editor to create pages like this with text, photos, galleries, video, lists, links and styled text. You can insert a gallery into your article that extends outward. Blockquote Example The content area is narrow for optimal readability (comfortable number of characters per line). Certain elements such as blockquotes and images can extend beyond the content area to create a dramatic effect. This demonstrates the effect. For God so loved the world that he gave his one and…",
    },
    {
      image: "./src/assets/5.jpg",
      topic: "Family Ministry",
      des: "You can use WordPress’s content editor to create pages like this with text, photos, galleries, video, lists, links and styled text. You can insert a gallery into your article that extends outward. Blockquote Example The content area is narrow for optimal readability (comfortable number of characters per line). Certain elements such as blockquotes and images can extend beyond the content area to create a dramatic effect. This demonstrates the effect. For God so loved the world that he gave his one and…",
    },
  ];
  return (
    <>
      <div className="bg-gray-50">
        <div className="relative">
          <img
            src="./src/assets/6.jpg"
            alt=""
            className="w-full box h-80 opacity-80 "
          />
          <div className="bg-black w-full h-80 absolute top-0 opacity-75"></div>
          <div className="text-7xl absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white font-bold ">
            Ministries
          </div>
        </div>

        <div className="w-8/12 mx-auto text-xl mt-7 py-3">
          <p>
            This is a demonstration of the Child Pages template. It lists all
            pages that have this page as their parent. This is useful for an
            automatic list of ministries. It can be used for other purposes
            similarly (see Testimonies).
          </p>
        </div>
        <div className="">
          <div className=" h-fit px-10 grid py-8 grid-cols-2 gap-10 w-full mx-auto bg-gray-50">
            {ministries.map((val, i) => {
              return (
                <div className="flex bg-white shadow-md shadow-gray-200 w-fit mx-auto h-fit line-clamp-1 text-sm border-transparent rounded-lg ">
                  <div className="w-5/12">
                    <img src={val.image} className="h-full w-full" />
                  </div>
                  <div className="py-3 pl-3 w-7/12 ">
                    <div>
                      {" "}
                      <p className="font-bold w-fit cursor-pointer text-md text-[#ca3892] hover:text-[#0693e3] transition-all delay-75 ease-in-out duration-300">
                        {" "}
                        {val.topic}{" "}
                      </p>
                    </div>
                    <div className="text-sm line-clamp-5">{val.des}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Ministries;
