import React from "react";
import homeIcon from "../Assests/Home.png";
import banner from "../Assests/banner.png";

const Main = () => {
  return (
    <div className="home">
      <figure className="home_img">
        <img src={homeIcon} alt="" />
      </figure>
      <div className="home_info">
        <img src={banner} alt="banner" />
        <div className="home_pro">
          <h1>Bismuth Technologies</h1>
          <p>
            IT outsourcing and consulting firm with a speciaty in AL/ML firm
            that provide quality service
          </p>
          <p>144 followers</p>
          <p>6 employees</p>

          <button className="btn1">Message</button>

          <button className="btn2">follow</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
