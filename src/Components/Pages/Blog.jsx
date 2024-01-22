import React from "react";

function Blog() {
  const blog = [
    {
      image: "./src/assets/6.jpg",
      topic: "Join a Small Group",
      date: "JUN 11, 2019",
      link: "Sample User",
      description:
        "You can use WordPress’s content editor to publish content with text, ph publish conordPress’s content editor to publish content with text, ph publish content ordPress’s content editor to publish content with text, ph publish contenttent with text, photo publish content with text, photo publish content with text, photootos, galleries, lorem",
    },
    {
      image: "./src/assets/6.jpg",
      topic: "Join a Small Group",
      date: "JUN 11, 2019",
      link: "Sample User",
      description:
        "You can use WordPress’s content editor to publish content with text, ph publish conordPress’s content editor to publish content with text, ph publish content ordPress’s content editor to publish content with text, ph publish contenttent with text, photo publish content with text, photo publish content with text, photootos, galleries, lorem",
    },
    {
      image: "./src/assets/6.jpg",
      topic: "Join a Small Group",
      date: "JUN 11, 2019",
      link: "Sample User",
      description:
        "You can use WordPress’s content editor to publish content with text, ph publish conordPress’s content editor to publish content with text, ph publish content ordPress’s content editor to publish content with text, ph publish contenttent with text, photo publish content with text, photo publish content with text, photootos, galleries, lorem",
    },
    {
      image: "./src/assets/6.jpg",
      topic: "Join a Small Group",
      date: "JUN 11, 2019",
      link: "Sample User",
      description:
        "You can use WordPress’s content editor to publish content with text, ph publish conordPress’s content editor to publish content with text, ph publish content ordPress’s content editor to publish content with text, ph publish contenttent with text, photo publish content with text, photo publish content with text, photootos, galleries, lorem",
    },
    {
      image: "./src/assets/6.jpg",
      topic: "Join a Small Group",
      date: "JUN 11, 2019",
      link: "Sample User",
      description:
        "You can use WordPress’s content editor to publish content with text, ph publish conordPress’s content editor to publish content with text, ph publish content ordPress’s content editor to publish content with text, ph publish contenttent with text, photo publish content with text, photo publish content with text, photootos, galleries, lorem",
    },
    {
      image: "./src/assets/6.jpg",
      topic: "Join a Small Group",
      date: "JUN 11, 2019",
      link: "Sample User",
      description:
        "You can use WordPress’s content editor to publish content with text, ph publish conordPress’s content editor to publish content with text, ph publish content ordPress’s content editor to publish content with text, ph publish contenttent with text, photo publish content with text, photo publish content with text, photootos, galleries, lorem",
    },
  ];
  return (
    <>
      <div className="h-fit bg-gray-50">
        <div className="relative">
          <img src="./src/assets/5.jpg" alt="" className="w-full h-72" />
          <div className="h-72 w-full bg-blue-400 absolute top-0 opacity-70 "></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            {" "}
            <p className="text-6xl font-bold text-white">Church Blog</p>
          </div>
        </div>

        <div className=" bg-gray-50  grid grid-cols-2 mt-10 w-full gap-10 px-10">
          {blog.map((val, i) => {
            return (
              <div className=" h-36 bg-white flex rounded-xl shadow-md shadow-[#61616133]">
                <div className="w-4/12 bg-yellow-700 ">
                  <img src={val.image} alt="" className="h-full" />
                </div>
                <div className="w-8/12  pl-2 flex flex-col gap-3">
                  <div>
                    <p className="font-bold w-fit cursor-pointer text-md text-[#ca3892] hover:text-[#0693e3] transition-all delay-75 ease-in-out duration-300">
                      {val.topic}
                    </p>
                  </div>
                  <div className="">
                    <span className="border-2 border-transparent rounded-2xl p-1 text-xs h-fit bg-yellow-200 opacity-80 ">
                      {val.date}
                    </span>
                    <span className="pl-2 text-sm font-normal  w-fit cursor-pointer  hover:text-[#0693e3] transition-all delay-75 ease-in-out duration-300">
                      {val.link}
                    </span>
                  </div>
                  <div className="line-clamp-3 text-sm ">{val.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Blog;
