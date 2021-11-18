import React from "react";
import Timer from "../Timer/Timer";
import Solana from "../../assets/solana.png";
import waves from "../../assets/waves.png";
import "./styles.css";
import Mint from "../Mint/Mint";

const MintComponent = () => {
  return (
    <div className="mint-component">
      <img src={waves} alt="" className="waves" />
      <Timer strokeWidth="15" />
      <div className="mint-right">
        <h1>Connect</h1>
        <Mint />
        {/* <button >MINT</button> */}
        <p>Pre-Sale price: 0.55 Solana</p>
        <img src={Solana} alt="" />
      </div>
    </div>
  );
};

export default MintComponent;
