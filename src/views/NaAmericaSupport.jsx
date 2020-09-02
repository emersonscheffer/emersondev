import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { POLICY, SUPPORT, AZULCOLOR, REDCOLOR, GRAYCOLOR } from "../Constants";
import PageTitle from "../components/PageTitle";
import MyHeader from "../components/MyHeader";
import Topic from "../components/Topic";
import MyParagraph from "../components/MyParagraph";
import MyBtns from "../components/MyBtns";
import MyFooter from "../components/MyFooter";

const NaAmericaSupport = () => {
  const [manualNav, setManualNav] = useState(false);
  const redirecting = () => {
    if (manualNav) {
      return <Redirect to="/naamericamanual" />;
    }
  };

  let headerLinks = [
    { name: POLICY, goto: "/naamericapolicy" },
    { name: SUPPORT, goto: "/naamericasupport" },
  ];

  return (
    <div>
      {redirecting()}
      <MyHeader
        headerLinks={headerLinks}
        logoImage={require("../images/naAmericaLogo.png")}
        logoName="Na America"
        hovercolor={AZULCOLOR}
        barColor={AZULCOLOR}
      />

      <PageTitle title="Na America Support" />
      <Topic word="Need help with Na America?" color={AZULCOLOR} />
      <MyParagraph paragraphWords="The Na America manual is a great place to start if you need help with the application." />

      <MyBtns
        btnTitleColor="white"
        btnAction={()=>setManualNav(true)}
        btnTitle="Read Manual"
        btnColor={REDCOLOR}
      />
      {/* <MyBtns
        btnTitleColor="white"
        btnTitle="Contact us"
        btnColor={GRAYCOLOR}
      /> */}

      <MyParagraph paragraphWords="If you have any questions that the manual doesn't cover please do not hesitate to contact us." />

      <MyFooter />

    </div>
  );
};

export default NaAmericaSupport;
