import React from "react";
import Canvas from "../components/Canvas";
//import Footer from "../components/Footer";
import Header from "../components/MyHeader";

import { CONTACT, IOSAPPS, CONCEPTS } from "../Constants";

const EmersonDev = () => {
  let headerLinks = [
    { name: IOSAPPS, goto: "/iosapps" },
    { name: CONTACT, goto: "" },
    { name: CONCEPTS, goto: "" },
  ];

  return (
    <div>
      <Header headerLinks={headerLinks} />
      <br />
      Emerson Dev
      <br />
      <Canvas />
      {/* <Footer /> */}
    </div>
  );
};

export default EmersonDev;
