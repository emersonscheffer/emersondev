import React from "react";
//import Footer from "../components/Footer";
import Header from "../components/Header";

import { CONTACT, IOSAPPS, CONCEPTS } from "../Constants";

const EmersonDev = () => {
  let headerLinks = [
    { name: IOSAPPS, goto: "/naamerica" },
    { name: CONTACT, goto: "wwww - contact" },
    { name: CONCEPTS, goto: "wwww - concepts" },
  ];

  return (
    <div>
      <Header headerLinks={headerLinks} />

      <br />
      <br />

      {/* <Footer /> */}
    </div>
  );
};

export default EmersonDev;
