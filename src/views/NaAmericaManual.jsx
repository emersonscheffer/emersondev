import React from "react";
import { POLICY, SUPPORT, AZULCOLOR } from "../Constants";
import PageTitle from "../components/PageTitle";
import MyHeader from "../components/MyHeader";
import Topic from "../components/Topic";
import MyParagraph from "../components/MyParagraph";
import MyPicture from "../components/MyPicture";

const NaAmericaManual = () => {
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
        barColor={AZULCOLOR}
      />

      <PageTitle title="Na America Manual" />

      <Topic word="Signing Up" color={AZULCOLOR} />
      
      <MyParagraph paragraphWords="All you need to sign up is your firstname, lastname,  email, create a password with 6 characters or more, accept the terms and be 18 years or older."/>
      <MyPicture picName="names" picSrc={require("../images/Simulator.png")}/>

      <Topic word="Signing Out" color={AZULCOLOR} />
    </div>
  );
};

export default NaAmericaManual;
