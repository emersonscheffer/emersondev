import React from 'react'

import { POLICY, SUPPORT, AZULCOLOR } from "../Constants";
import PageTitle from "../components/PageTitle";
import MyHeader from "../components/MyHeader";

const NaAmericaSupport = () => {
    let headerLinks = [
        { name: POLICY, goto: "/naamericapolicy" },
        { name: SUPPORT, goto: "naamericasupport" },
      ];

    return <div>
        <MyHeader
        headerLinks={headerLinks}
        logoImage={require("../images/naAmericaLogo.png")}
        logoName="Na America"
        hovercolor={AZULCOLOR}
        barColor={AZULCOLOR}
      />

<PageTitle title="Na America Support" />
    </div>
}

export default NaAmericaSupport