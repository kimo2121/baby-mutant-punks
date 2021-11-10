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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
          est ultricies integer quis. Iaculis urna id volutpat.
        </p>
      </div>
      <div className="right-mutant2">
        <div className="each-step2">
          <img src={launch} alt="" />
          <div>
            <h3>Launch</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
        </div>
        <div className="each-step2">
          <img src={value} alt="" />
          <div>
            <h3>Value</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
        </div>
        <div className="each-step2">
          <img src={secury} alt="" />
          <div>
            <h3>Secury</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutantPunks2;
