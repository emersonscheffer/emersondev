import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { CONTACT, IOSAPPS, CONCEPTS } from "../Constants";

const EmersonDev = () => {
  let headerLinks = [
    { name: IOSAPPS, goto: "wwww - ios" },
    { name: CONTACT, goto: "wwww - contact" },
    { name: CONCEPTS, goto: "wwww - concepts" },
  ];

  return (
    <div>
      <Header headerLinks={headerLinks} />
      <h1>Hello Emerson 123 - hh</h1>

      <Footer />
    </div>
  );
};

export default EmersonDev;
