import React from "react";
import CustomizedAccordions from "../../components/FAQ/FAQ";
import MutantPunks2 from "../../components/MutantPunks2/MutantPunks2";
import MutantPunks3 from "../../components/MutantPunks3/MutantPunks";
import Team from "../../components/Team/Team";
import "./styles.css";

const About = () => {
  return (
    <div className="about">
      <div className="bk1">
        <MutantPunks3 />
      </div>
      <div className="bk2">
        <MutantPunks2 />
      </div>
      <div className="bk1">
        <Team />
      </div>
      <div className="bk2">
        <CustomizedAccordions />
        <div className="join-btn-p">
          <p>
            Join us in cultivating an incredible community of online art punks.{" "}
          </p>
          <button className="join-btn">Join Us →</button>
        </div>
      </div>
    </div>
  );
};

export default About;
