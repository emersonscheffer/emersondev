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

      {/* <Topic word="Signing Up" color={AZULCOLOR} /> */}

      {/* <MyParagraph paragraphWords="All you need to sign up is your firstname, lastname,  email, create a password with 6 characters or more, accept the terms and be 18 years or older." /> */}

      {/* <MyPicture picName="names" picSrc={require("../images/Simulator.png")} /> */}

      {/* <Topic word="Signing Out" color={AZULCOLOR} /> */}

      <Topic word="Adding an Anuncio" color={AZULCOLOR} />

      <MyParagraph paragraphWords="Meus Anúncios tab is where you can add, delete or edit your ads." />

      <MyPicture
        picName="meus anuncios"
        picSrc={require("../images/meusAnunciosButton.png")}
      />

      <MyParagraph
        paragraphWords="Click the + sign on the top right corner to add an Anúncio.
"
      />

      <MyPicture
        picName="plus sign image"
        picSrc={require("../images/plusSign.png")}
      />

      <MyParagraph paragraphWords="Tap on the select region where you can select the state, the region / county, and the city / area for your anúncio." />

      <MyPicture
        picName="plus sign image"
        picSrc={require("../images/selectState.png")}
      />

      <MyParagraph paragraphWords="If you can’t find the region or he city on the list, you can use the outra text field to enter a new region / county , or city / area. If you do so, the new information will be added to the database and will be ready for you to use next time." />

      <MyPicture
        picName="plus sign image"
        picSrc={require("../images/selectRegion.png")}
      />

      <MyPicture
        picName="plus sign image"
        picSrc={require("../images/selectArea.png")}
      />

      <MyParagraph paragraphWords="Also, if you like, you can select ‘save as my region’ button to save your location as default for your next ads." />

      <MyPicture
        picName="plus sign image"
        picSrc={require("../images/salvarRegion.png")}
      />

      <MyParagraph paragraphWords="Select the categoria from the list. If you can’t find the category that you looking for use the outra text field. If you do so, the new information will be added to the database and will be ready for you to use next time." />

      <MyPicture
        picName="plus sign image"
        picSrc={require("../images/selectCategory.png")}
      />

      <MyParagraph
        paragraphWords="Tap on 'editar descrição e preço' button to edit the price and and the description of your ad. 
Leave unselected or select if the payment is weekly or monthly."
      />

      <MyPicture
        picName="plus sign image"
        picSrc={require("../images/editPrice.png")}
      />

      <MyPicture
        picName="plus sign image"
        picSrc={require("../images/priceSelect.png")}
      />

      <MyParagraph
        paragraphWords="Tap salvar button on the bottom of the screen to save the description, the price and price plan.
"
      />

      <MyParagraph paragraphWords="Select how you want to be reached. You have three options: select via telephone or email, telephone , or just email." />

      <MyPicture
        picName="plus sign image"
        picSrc={require("../images/contactSelect.png")}
      />

      <MyParagraph
        paragraphWords="If you selected the telephone as a contact option , you will be prompt to add your telephone number if haven’t done so.
"
      />

      <MyParagraph
        paragraphWords="After all selected , tap on Anunciar
"
      />
      <MyParagraph
        paragraphWords="Your anúncio will appear on both lists, the meus anúncios list and the main list of anuncios.
You are the only one who can see the meus anuncios lists. The main anúncio list can be seen by all Na America users. The list is ordered by date."
      />

      <MyParagraph paragraphWords="If you find an anúncio that you want see the details, you just tap on it and another screen will pop up if the information of the anúncio selected." />

      <MyParagraph paragraphWords="On the details page there is a favorite button where you can toggle and save the anuncios on the favorites page for easy and fast access." />

      <MyParagraph paragraphWords="" />
    </div>
  );
};

export default NaAmericaManual;
