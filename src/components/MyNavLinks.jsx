import React from "react";
import MyNavLink from "./MyNavLink";

const MyNavLinks = ({ headerLinks, hovercolor }) => {
  // render all links
  const linksRender = () => {
    let linkArr = [];

    for (let index = 0; index < headerLinks.length; index++) {
      linkArr.push(
        <MyNavLink
          key={headerLinks[index].name}
          linkname={headerLinks[index].name}
          goto={headerLinks[index].goto}
          hovercolor={hovercolor}
        />
      );
    }
    return linkArr;
  };

  return <div className="nav-links-container">{linksRender()}</div>;
};

export default MyNavLinks;
