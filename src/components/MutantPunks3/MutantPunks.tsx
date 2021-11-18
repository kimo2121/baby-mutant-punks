import React from "react";
import logo from "../../assets/logo.png";
import baby1 from "../../assets/banner/baby1.png";
import baby2 from "../../assets/banner/baby2.png";
import baby3 from "../../assets/banner/baby3.png";
import baby4 from "../../assets/banner/baby4.png";
import "./styles.css";

const MutantPunks3 = () => {
  return (
    <div className="about-mutant-punks">
      <img src={logo} alt="" />
      <div className="about-right-punk">
        <img src={baby1} alt="" />
        <img src={baby2} alt="" />
        <img src={baby3} alt="" />
        <img src={baby4} alt="" />
      </div>
      <p>
        A collection of <strong>10,000 unique</strong> , randomly generated art
        pieces, hand selected by a group of punks subverting the traditional art
        world.
      </p>
    </div>
  );
};

export default MutantPunks3;
