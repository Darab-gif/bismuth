import React from "react";
import { connectData } from "../Assests/data";

const Profile = ({ icon, text }) => {
  return (
    <div className="profile">
      {connectData.map((item, index) => (
        <div key={index} className="profile_info">
          <img
            src={item.image}
            alt=""
            style={{ height: "50px", width: "50px" }}
          />

          <div className="profile_pro">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
          <span className="profile_sign">
            {" "}
            <img src={icon} alt="" />
          </span>
        </div>
      ))}
      <p className="para">{text}</p>
    </div>
  );
};

export default Profile;
