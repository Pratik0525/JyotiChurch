import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Location() {
  return (
    <div className="bg-yellow-500  relative">
      <div>
        <iframe
          className="w-full h-96 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1829431629253!2d83.46784597492051!3d27.711637276180095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399686f0ba8df137%3A0x342d0d688a210a26!2sButwal%20Jyothi%20Church!5e0!3m2!1sen!2snp!4v1704279277348!5m2!1sen!2snp"
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" w-fit h-48 bg-white rounded-3xl shadow-md shadow-gray-400 flex flex-col gap-6  p-5 absolute -top-12 left-16 ">
        <div className="flex">
          <div className="font-bold  w-52">
            BUTWAL-7,JYOTINAGAR RUPANDEHI,NEPAL
          </div>
          <div className="flex gap-4">
            <button className="border-2 pratik text-sm font-semibold h-10 border-pink-400 w-fit p-1  hover:border-[#3d80f1] hover:text-[#3d80f1]  rounded-3xl transition duration-300 ease-in text-[#ca3892]">
              DIRECTIONS
            </button>
            <button className="border-2 pratik text-sm font-semibold h-10 border-pink-400 w-fit p-1  hover:border-[#3d80f1] hover:text-[#3d80f1]  rounded-3xl transition duration-300 ease-in text-[#ca3892]">
              LOCATIONS
            </button>
          </div>
        </div>
        <div className="font-bold text-lg">
          <p>
            {" "}
            <b className=" text-[#3d80f1]">Satur</b>
            day @ 10 am at Jyotinagar
          </p>
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <div className="text-[#ca3892] hover:text-[#3d80f1] transition-all ease-in duration-200 cursor-pointer font-semibold">
              071-545673
            </div>
            <div className="text-[#ca3892] hover:text-[#3d80f1] transition-all ease-in duration-200 cursor-pointer font-semibold">
              butwaljyotichurch@gmail.com
            </div>
            <div className="flex gap-2 ">
              <FaFacebook className=" hover:text-[#3d80f1] transition-all ease-in duration-200 cursor-pointer font-semibold" />
              <FaTwitter className=" hover:text-[#3d80f1] transition-all ease-in duration-200 cursor-pointer font-semibold" />
              <FaInstagramSquare className=" hover:text-[#3d80f1] transition-all ease-in duration-200 cursor-pointer font-semibold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
