import React from "react";

import TopicBar from "../components/TopicBar";

import MyHeader from "../components/MyHeader";

import { POLICY, SUPPORT, AZULCOLOR } from "../Constants";
import Topic from "../components/Topic";

const NaAmerica = () => {
  let headerLinks = [
    { name: POLICY, goto: "" },
    { name: SUPPORT, goto: "" },
  ];

  return (
    <div>
      <MyHeader
        headerLinks={headerLinks}
        logoImage={require("../images/naAmericaLogo.png")}
        logoName="Na America"
        hovercolor={AZULCOLOR}
      />

      <Topic word="Support" color={AZULCOLOR} />
      <Topic word="Support" color={AZULCOLOR} />
      <Topic word="Support" color={AZULCOLOR} />
      
    </div>
  );
};

export default NaAmerica;
