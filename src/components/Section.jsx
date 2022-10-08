import React from "react";
import ProfileSection from "../ProfileSection";
import Bio from "./Bio";
import Contact from "./Contact";

const Section = () => {
  return (
    <div className="section">
      <Contact />
      <Bio />
      <ProfileSection />
    </div>
  );
};

export default Section;
