import React from "react";

import "../css/HeaderCSS.css";

import Logo from "./Logo";
import MyNavLinks from "./MyNavLinks";

const MyHeader = ({ headerLinks, logoImage, logoName, hovercolor, barColor }) => {
  // return
  return (
    <div style={{ borderBottom: `solid 1px ${barColor} ` }} className="header-class">
      <Logo logoSrc={logoImage} logoName={logoName} />
      <MyNavLinks headerLinks={headerLinks} hovercolor={hovercolor} />
    </div>
  );
};

export default MyHeader;
