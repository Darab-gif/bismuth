import React from "react";
import logo from "../Assests/logo.png";
import home_icon from "../Assests/home-icon.png";
import people from "../Assests/people.png";
import tools from "../Assests/tools.png";
import chat2 from "../Assests/chat2.png";
import notification from "../Assests/notification.png";
import avatar from "../Assests/avatar.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="header_logo">
        <img src={logo} alt="logo" />
        <form action="" className="header_form">
          <input type="serach" placeholder="Search" />
        </form>
      </div>
      <ul className="header_list">
        <li>
          <span>
            <img src={home_icon} alt="" />
          </span>
          Home
        </li>
        <li>
          <span>
            <img src={people} alt="" />
          </span>
          Connections
        </li>
        <li>
          <span>
            <img src={tools} alt="" />
          </span>
          Jobs
        </li>
        <li>
          <span>
            <img src={chat2} alt="" />
          </span>
          Messaging
        </li>
        <li>
          <span>
            <img src={notification} alt="" />
          </span>
          Notifications
        </li>
      </ul>
      <div className="header_profile">
        <img src={avatar} alt="avatar" />
        <p>Account</p> <span></span>
      </div>
    </nav>
  );
};

export default Header;
