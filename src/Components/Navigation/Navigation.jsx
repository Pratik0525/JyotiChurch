import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function Navigation() {
  const navdata = [
    {
      title: "Sermons",
      path: "/",
    },
    {
      title: "Events",
      path: "/event",
    },
    {
      title: "Ministries",
      path: "/ministries",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "More",
    },
  ];
  return (
    <nav className="bg-pink-400 h-24 m-0 p-0 ">
      <div class="navbar" className=" border-3 ">
        <div className="flex justify-between items-center linercolor h-24 ">
          <div className="text-2xl font-bold pl-20 text-white cursor-pointer hover:text-[#fee6af] transition-all delay-100 duration-300 ease-in-out">
            Butwal Jyoti Church
          </div>
          <div className="">
            <div className="text-base flex gap-10 font-semibold text-white">
              {navdata.map((val, i) => {
                return (
                  <Link
                    key={i}
                    to={val.path}
                    className=" text-md hover:text-[#fee6af] transition-all delay-100 duration-300 ease-in-out "
                  >
                    {val.title}
                  </Link>
                );
              })}

              {/* <Link
                to="/events"
                className=" text-lg hover:text-[#fee6af] transition-all delay-100 duration-300 ease-in-out "
              >
                {" "}
                Events{" "}
              </Link>
              <Link
                to="/ministries"
                className=" text-lg hover:text-[#fee6af] transition-all delay-100 duration-300 ease-in-out "
              >
                Ministries
              </Link>
              <Link
                to="/blog"
                className=" text-lg hover:text-[#fee6af] transition-all delay-100 duration-300 ease-in-out "
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className=" text-lg hover:text-[#fee6af] transition-all delay-100 duration-300 ease-in-out "
              >
                Contact
              </Link>
              <Link
                to="/more"
                className=" text-lg hover:text-[#fee6af] transition-all delay-100 duration-300 ease-in-out "
              >
                More
              </Link> */}
            </div>
          </div>
          <div
            class="navbar-btn"
            className="pr-20 text-base flex justify-center items-center gap-3"
          >
            <button className="border-2 rounded-xl h-10 w-24 border-[#fee6af] font-bold text-[#fee6af] hover:opacity-80 hover:transition hover:duration-300 ">
              New Here
            </button>
            <FaSearch className="text-base text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
