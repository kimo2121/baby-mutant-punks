import React from "react";
import babyMutant from "../../assets/babyMutant.png";
import baby1 from "../../assets/baby1.png";
import baby2 from "../../assets/baby2.png";
import baby3 from "../../assets/baby3.png";
import baby4 from "../../assets/baby4.png";
import "./styles.css";

const MutantPunks = () => {
  return (
    <div className="mutant-punks">
      <div className="left-punk">
        <img src={babyMutant} alt="" />
        <p>
          A collection of <strong>10,000 unique</strong> , randomly generated
          art pieces, hand selected by a group of punks subverting the
          traditional art world.
        </p>
        <div className="join-btn-p">
          <p>
            Join us in cultivating an incredible community of online art punks.{" "}
          </p>
          <button className="join-btn">Join Us →</button>
        </div>
      </div>
      <div className="right-punk">
        <div className="right-top">
          <img src={baby1} alt="" />
          <img src={baby2} alt="" />
        </div>
        <div className="right-down">
          <img src={baby3} alt="" />
          <img src={baby4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MutantPunks;
