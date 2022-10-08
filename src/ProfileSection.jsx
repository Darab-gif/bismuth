import React from "react";
import Follow from "./components/Follow";
import Profile from "./components/Profile";
import chat from "./Assests/chat.png";

const ProfileSection = () => {
  return (
    <div>
      <Profile icon={chat} text="All" />
      <Follow />
    </div>
  );
};

export default ProfileSection;
