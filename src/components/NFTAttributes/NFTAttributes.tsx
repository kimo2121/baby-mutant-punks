import React from "react";
import ImgTxt from "../ImgTxt/ImgTxt";
import "./styles.css";

import bk from "../../assets/bk.png";
import hat from "../../assets/hat.png";
import skins from "../../assets/skins.png";
import clothes from "../../assets/clothes.png";
import months from "../../assets/months.png";
import eyes from "../../assets/eyes.png";
import glasses from "../../assets/glasses.png";
import beards from "../../assets/beards.png";

const NFTAttributes = () => {
  return (
    <div className="attributes">
      <h1>NFT Attributes</h1>
      <div className="att-container">
        <ImgTxt
          name="Backgrounds"
          text="10"
          img={bk}
          className="single-rarity single-attr"
        />
        <ImgTxt
          name="Hats"
          text="8"
          img={hat}
          className="single-rarity single-attr"
        />
        <ImgTxt
          name="Skins"
          text="6"
          img={skins}
          className="single-rarity single-attr"
        />
        <ImgTxt
          name="Clothes"
          text="10"
          img={clothes}
          className="single-rarity single-attr"
        />
        <ImgTxt
          name="Months"
          text="3"
          img={months}
          className="single-rarity single-attr"
        />
        <ImgTxt
          name="Eyes"
          text="7"
          img={eyes}
          className="single-rarity single-attr"
        />
        <ImgTxt
          name="Glasses"
          text="6"
          img={glasses}
          className="single-rarity single-attr"
        />
        <ImgTxt
          name="Beards"
          text="5"
          img={beards}
          className="single-rarity single-attr"
        />
      </div>
    </div>
  );
};

export default NFTAttributes;
