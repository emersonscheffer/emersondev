import React, { useState } from "react";
import { Redirect } from "react-router-dom";


const MyNavLink = ({ linkname, goto, hovercolor }) => {
  const [navigate, setNavigate] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const redirectinig = () => {
    if (navigate) {
      return <Redirect to={goto} />;
    }
  };

  const styleLink = {
    color: "black"
  };

  const hoverState = {
    color: hovercolor
  };

  return (
    <div
      className="nav-link"
      style={isHovering ? hoverState : styleLink}
      onClick={() => setNavigate(true)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {redirectinig()}
      <h1>{linkname}</h1>
    </div>
  );
};

export default MyNavLink;
