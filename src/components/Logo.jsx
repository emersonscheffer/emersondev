import React from "react";

const Logo = ({ logoSrc, logoName }) => {
  return (
    <div>
      <img src={logoSrc} alt={logoName} />
    </div>
  );
};
export default Logo;
