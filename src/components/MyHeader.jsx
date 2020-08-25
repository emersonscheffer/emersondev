import React from "react";

import "../css/HeaderCSS.css";

import Logo from "./Logo";
import MyNavLinks from "./MyNavLinks";

const MyHeader = ({ headerLinks, logoImage, logoName, hovercolor }) => {
  // return
  return (
    <div className="header-class">
      <Logo logoSrc={logoImage} logoName={logoName} />
      <MyNavLinks headerLinks={headerLinks} hovercolor={hovercolor} />
    </div>
  );
};

export default MyHeader;
