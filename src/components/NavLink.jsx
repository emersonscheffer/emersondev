import React, { useState } from "react";

const NavLink = ({ linkname, goto }) => {
  const [navigate, setNavigate] = useState(false);

  const redirectinig = () => {
    if (navigate) {
      console.log("went to ", goto);
    }
  };

  return (
    <div
      style={{ fontSize: "14px", cursor: "pointer" }}
      onClick={() => setNavigate(true)}
    >
      {redirectinig()}
      <h1>{linkname}</h1>
    </div>
  );
};

export default NavLink;
