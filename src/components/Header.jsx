import React from "react";
import NavLink from "./NavLink";

const Header = ({ headerLinks }) => {
  // render all links
  const linksRender = () => {
    let linkArr = [];

    for (let index = 0; index < headerLinks.length; index++) {
      linkArr.push(<NavLink key={headerLinks[index].name} linkname={headerLinks[index].name} goto={headerLinks[index].goto}/>);
    }
    return linkArr;
  };

  return (
    <div>
      <h1>Header</h1>

      {linksRender()}
    </div>
  );
};

export default Header;
