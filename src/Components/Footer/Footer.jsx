import React from "react";
import {
  FaSearch,
  FaVideo,
  FaHeadphonesAlt,
  FaFilePdf,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="linercolor w-full h-fit py-10 ">
        <div className=" flex justify-center items-end gap-5 h-28">
          <FaFacebook className="text-4xl text-white cursor-pointer hover:text-[#fee6af] trasnsition-all delay-100 duration-300 ease-in" />
          <FaTwitter className="text-4xl text-white cursor-pointer hover:text-[#fee6af] trasnsition-all delay-100 duration-300 ease-in" />
          <FaInstagramSquare className="text-4xl text-white cursor-pointer hover:text-[#fee6af] trasnsition-all delay-100 duration-300 ease-in" />
        </div>
        <div className=" flex justify-center items-center gap-20 h-60 ">
          <div>
            <div className="font-bold text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out">
              About
            </div>
            <div className="grid mt-2">
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                What We Believe
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Sunday Services
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                What to Expect
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Where We Meet
              </a>
            </div>
          </div>

          <div>
            <div className="font-bold text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out">
              Sermons
            </div>
            <div className="grid mt-2">
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Sermon Topics
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Sermon Series
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Sermon Books
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Sermon Speakers
              </a>
            </div>
          </div>

          <div>
            <div className="font-bold text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out">
              Events
            </div>
            <div className="grid mt-2">
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Events Calendar
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Upcoming Events
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Past Events
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Class Schedule
              </a>
            </div>
          </div>

          <div>
            <div className="font-bold text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out">
              Ministries
            </div>
            <div className="grid mt-2">
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Family Ministry
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Men’s Ministry
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Women’s Ministry
              </a>
              <a
                href=""
                className=" text-white hover:text-[#fee6af] cursor-pointer transition-all delay-100 duration-300 ease-in-out"
              >
                Evangelism
              </a>
            </div>
          </div>
        </div>
        <d iv className="flex justify-center items-center text-white  h-10 ">
          <p>
            2024 Jubilee. Powered by <b>pandeypratik.np.com</b>
          </p>
        </d>
      </div>
    </>
  );
}

export default Footer;
