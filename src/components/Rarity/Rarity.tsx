import React from "react";
import ImgTxt from "../ImgTxt/ImgTxt";
import "./styles.css";
import baby4 from "../../assets/baby4.png";
import baby3 from "../../assets/baby3.png";
import baby2 from "../../assets/baby2.png";
import baby1 from "../../assets/baby1.png";

const Rarity: React.FC = () => {
  return (
    <div className="rarity">
      <h1>NFT Rarity</h1>
      <div className="nfts">
        <ImgTxt
          img={baby4}
          className="member single-rarity"
          text="0.09% Rarity"
          name="Demon"
        />
        <ImgTxt
          img={baby3}
          className="member single-rarity"
          text="0.24% Rarity"
          name="Mummy"
        />
        <ImgTxt
          img={baby2}
          className="member single-rarity"
          text="0.88% Rarity"
          name="Ape Zombie"
        />
        <ImgTxt
          img={baby1}
          className="member single-rarity"
          text="4.2 Rarity"
          name="Female Orc"
        />
      </div>
    </div>
  );
};

export default Rarity;
