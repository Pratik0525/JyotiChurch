import React from "react";
import Online from "../pagecomp;onent/Home/Online";
import Events from "../pagecomp;onent/Home/Events";
import Latest from "../pagecomp;onent/Home/Latest";
import Verse from "../pagecomp;onent/Home/Verse";
import Profile from "../pagecomp;onent/Home/Profile";
import Location from "../pagecomp;onent/Home/Location";
import Landing from "../pagecomp;onent/Home/Landing";

function Home() {
  return (
    <div>
      <div className="">
        {/* <h1>hey there</h1> */}
        <Landing />
        <Location />
        <Profile />
        <Verse />
        <Latest />
        <Events />
        <Online />
      </div>
    </div>
  );
}

export default Home;
