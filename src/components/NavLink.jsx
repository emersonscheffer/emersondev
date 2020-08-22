import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const NavLink = ({ linkname, goto }) => {
  const [navigate, setNavigate] = useState(false);

  const redirectinig = () => {
    if (navigate) {
      console.log("went to ", goto);
      return <Redirect to={goto} />;
    }
  };

  return (
    <div
      className="nav-link"
      style={{
        fontWeight: "bold",
        fontSize: "14px",
        cursor: "pointer",
        padding: "5px",
        float: "left",
        margin: "2px",
      }}
      onClick={() => setNavigate(true)}
    >
      {redirectinig()}
      <h1>{linkname}</h1>
    </div>
  );
};

export default NavLink;
