import React from "react";

import MyHeader from "../components/MyHeader";

import { POLICY, SUPPORT, AZULCOLOR } from "../Constants";
import PageTitle from "../components/PageTitle";

const NaAmerica = () => {
  let headerLinks = [
    { name: POLICY, goto: "/naamericapolicy" },
    { name: SUPPORT, goto: "/naamericasupport" },
  ];

  return (
    <div>
      <MyHeader
        headerLinks={headerLinks}
        logoImage={require("../images/naAmericaLogo.png")}
        logoName="Na America"
        hovercolor={AZULCOLOR}
      />

      <PageTitle title="Welcome to Na America" />

      
    </div>
  );
};

export default NaAmerica;
