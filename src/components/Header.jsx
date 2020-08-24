import React from "react";
import NavLink from "./MyNavLink";

import "../css/HeaderCSS.css";

import Logo from "./Logo";

const Header = ({ headerLinks }) => {
  // render all links
  const linksRender = () => {
    let linkArr = [];

    for (let index = 0; index < headerLinks.length; index++) {
      linkArr.push(
        <NavLink
          key={headerLinks[index].name}
          linkname={headerLinks[index].name}
          goto={headerLinks[index].goto}
        />
      );
    }
    return linkArr;
  };

  // return
  return (
    <div className="header-class">
      <Logo logoSrc="./imgz/logos/lacounty.png" logoName="Emerson DEV" />

      {linksRender()}
    </div>
  );
};

export default Header;
