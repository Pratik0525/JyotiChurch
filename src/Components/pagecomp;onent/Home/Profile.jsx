import React from "react";

const data = [
  {
    heading: "Plan a visit",
    description:
      "Let us show you what to expect before you come. We'd love to have you this Sunday.",
    image: "./src/assets/8.jpg",
    // gradient: "linear-gradient(rgb(35 55 43 / .5), rgb(135 145 243 / .7))",
  },
  {
    heading: "Plan a visit",
    description:
      "Let us show you what to expect before you come. We'd love to have you this Sunday.",
    image: "./src/assets/8.jpg",
    // gradient: "linear-gradient(rgb(35 55 43 / .5), rgb(135 145 243 / .7))",
  },
  {
    heading: "Plan a visit",
    description:
      "Let us show you what to expect before you come. We'd love to have you this Sunday.",
    image: "./src/assets/8.jpg",
    // gradient: "linear-gradient(rgb(35 55 43 / .5), rgb(135 145 243 / .7))",
  },
  {
    heading: "Plan a visit",
    description:
      "Let us show you what to expect before you come. We'd love to have you this Sunday.",
    image: "./src/assets/8.jpg",
    // gradient: "linear-gradient(rgb(35 55 43 / .5), rgb(135 145 243 / .7))",
  },
  {
    heading: "Plan a visit",
    description:
      "Let us show you what to expect before you come. We'd love to have you this Sunday.",
    image: "./src/assets/8.jpg",
    // gradient: "linear-gradient(rgb(35 55 43 / .5), rgb(135 145 243 / .7))",
  },
  {
    heading: "Plan a visit",
    description:
      "Let us show you what to expect before you come. We'd love to have you this Sunday.",
    image: "./src/assets/8.jpg",
    // gradient: "linear-gradient(rgb(35 55 43 / .5), rgb(135 145 243 / .7))",
  },
];

function Profile() {
  return (
    <>
      <div className="grid grid-cols-3 gap-8  w-full h-fit ">
        {data.map((val, i) => {
          return (
            <div className="w-72 h-56  relative mx-auto my-5">
              <div className="w-72 h-56 absolute top-0">
                <img src={val.image} alt="" className="bor-rad h-56 w-72" />
              </div>
              <div className="w-72 h-56 bg-black absolute top-0 opacity-40 bor-rad"></div>
              <div className="w-72 h-56 text-white text-center flex flex-col gap-5 pt-8 absolute top-0 bor-rad">
                <span className="text-3xl">{val.heading}</span>
                <span className="px-3">{val.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Profile;
