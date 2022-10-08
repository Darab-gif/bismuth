import React from "react";
import icon from "../Assests/user.png";
import Profile from "./Profile";

const Follow = () => {
  return (
    <div className="follow">
      <h3>Invite connections to Follow This Page</h3>
      <input type="search" name="" id="" placeholder="Search" />
      <div>
        <Profile icon={icon} />
      </div>
    </div>
  );
};

export default Follow;
