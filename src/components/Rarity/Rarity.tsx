import React from "react";
import ImgTxt from "../ImgTxt/ImgTxt";
import "./styles.css";
import baby4 from "../../assets/banner/baby4.png";
import baby3 from "../../assets/banner/baby3.png";
import baby2 from "../../assets/banner/baby2.png";
import baby1 from "../../assets/banner/baby1.png";
import { data } from "./Data";

const Rarity: React.FC = () => {
  return (
    <div className="rarity">
      <h1>NFT Rarity</h1>
      <div className="nfts">
        {data.map((item, index) => (
          <ImgTxt
            img={item.img}
            className="member single-rarity"
            text={`${item.percent} Rarity`}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Rarity;
