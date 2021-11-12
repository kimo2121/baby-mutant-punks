import React from "react";
import "./styles.css";
import babyMutant from "../../assets/babyMutant.png";
import launch from "../../assets/launch.png";
import value from "../../assets/value.png";
import secury from "../../assets/secury.png";

const MutantPunks2 = () => {
  return (
    <div className="mutant-punks2">
      <div className="left-mutant2">
        <img src={babyMutant} alt="" />
        <p>
          A collection of 10,000 unique, randomly generated art pieces, hand
          selected by a group of punks subverting the traditional art world.
          <br />
          <br />
          Join us on our journey of growing an amazing community for the people.
          <br />
          <br />
          We are giving away 2 Rolexes OR 2 Mutant Ape Yacht Clubs NFT’s, 2
          Degenerate Ape Academy NFT’s, and 50 Baby Mutant Punks. Read Roadmap
          for more details.
        </p>
      </div>
      <div className="right-mutant2">
        <div className="each-step2">
          <img src={launch} alt="" />
          <div>
            <h3>LAUNCH</h3>
            <p>Pre-Sale begins on December 2nd @6PM EST.</p>
            <p>Public Launch begins on December 5th @6PM EST.</p>
          </div>
        </div>

        <div className="each-step2">
          <img src={value} alt="" />
          <div>
            <h3>VALUE</h3>
            <p>0.55 Solana.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutantPunks2;
