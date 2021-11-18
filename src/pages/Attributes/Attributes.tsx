import React from "react";
import Collection from "../../components/Collection/Collection";
import NFTAttributes from "../../components/NFTAttributes/NFTAttributes";
import Rarity from "../../components/Rarity/Rarity";
import "./styles.css";

const Attributes = () => {
  return (
    <div className="attributes">
      <div className="bk1">
        <Rarity />
      </div>
      {/* <div className="bk2">
        <NFTAttributes />
      </div> */}
      <div className="bk1">
        <Collection />
      </div>
    </div>
  );
};

export default Attributes;
