import React from "react";
import MyHeader from "../components/MyHeader";
import { POLICY, SUPPORT, AZULCOLOR } from "../Constants";
import PageTitle from "../components/PageTitle";
import Topic from "../components/Topic";
import MyParagraph from "../components/MyParagraph";

const NaAmericaPolicy = () => {
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

      <PageTitle title="Our Privacy Policy" />

      <MyParagraph paragraphWords="Your privacy is important to us. That's why we don't collect any unnecessary data." />

      <Topic
        word="Does Na America collect personal information from your device?"
        color={AZULCOLOR}
      />

      <MyParagraph paragraphWords="No. If you install Na America app, it will not gather, store , or transmit any personal information about you." />

      <Topic
        word="What kind of information does Na America collect?"
        color={AZULCOLOR}
      />
      <MyParagraph paragraphWords="Na America collects one type of information: personal information you knowingly choose to provide. Which is covered below." />

      <Topic word="Sharing information with third parties" color={AZULCOLOR} />
      <MyParagraph paragraphWords="Na America does not share or sell any personal information to 3rd parties." />

      <Topic word="Good Practices" color={AZULCOLOR} />
      <MyParagraph paragraphWords="Na America reserves the right of deleting any kind of information or content that can be harmful, offensive or disrespectful to others. If the user keeps adding this type of information, the user account may be terminated without notice." />

      <Topic word="Email" color={AZULCOLOR} />
      <MyParagraph
        paragraphWords="The user email address is not shared to 3rd parties.
The user email is collected for sign up and login purposes.
The user has the option of sharing the email address with other Na America users when adding a new ad information.
Also, when the user adds new information to our database, like the name of a city, county or region, or a new category, we keep the user's email address until double checking if the information is correct. After making sure the information added is right, Na America keeps the information that was entered and deletes the email address from the entry record. If the information entered is disrespectful to others, the user may lose the access to entering new information."
      />

      <Topic word="Name" color={AZULCOLOR} />
      <MyParagraph
        paragraphWords="The user name and last name entered by the user is kept with the user profile information and shared with Na America other users through the ad information the user entered.
If the user decides to participate on the Mural part of the app, the user name will be showing as the author of the
Post or the author of the comment added to the post."
      />

      <Topic word="Telephone Number" color={AZULCOLOR} />
      <MyParagraph
        paragraphWords="Na America does not share, or collect the user's telephone number.
The user's telephone number is not required for the sign up or login procedures.
If the user hasn't done so and decides to be contacted via telephone, a prompt will pop up so the user can enter his/her telephone number."
      />

      <Topic word="Deleting account" color={AZULCOLOR} />
      <MyParagraph
        paragraphWords="If the user decides and requests, Na America will delete all the user's data stored. Na America can take up to 30 days to delete all the user's data. The user won't be able to create another account for the next 60 days from the date the data was erased from the database. For faster deletion of the data, the user can delete ads information and Mural posts as well as comments using the app."
      />
    </div>
  );
};

export default NaAmericaPolicy;