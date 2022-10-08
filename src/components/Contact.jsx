import React from "react";
import { contactList } from "../Assests/data";

const Contact = () => {
  return (
    <div className="contact">
      {contactList.map((item, index) => (
        <div key={index} className="contact_info">
          <h1 className="contact_header">{item.header}</h1>
          <div className="contact_pro">
            <p className="contact_desc">{item.desc}</p>
            <span className="contact_sign">
              <img src={item.sign} alt="" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
