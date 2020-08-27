import React from "react";

import { POLICY, SUPPORT, AZULCOLOR } from "../Constants";
import PageTitle from "../components/PageTitle";
import MyHeader from "../components/MyHeader";
import Topic from "../components/Topic";
import MyParagraph from "../components/MyParagraph";

const NaAmericaSupport = () => {
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

      <PageTitle title="Na America Support" />
      <Topic word="Need help with Na America?" color={AZULCOLOR} />
      <MyParagraph paragraphWords="The Na America manual is a great place to start if you need help with the application." />

      <MyParagraph
        paragraphWords="If you have any questions that the manual doesn't cover please do not hesitate to contact us."
      />
    </div>
  );
};

export default NaAmericaSupport;
