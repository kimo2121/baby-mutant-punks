import React from "react";
import "./styles.css";
import baby4 from "../../assets/banner/baby4.png";
import baby3 from "../../assets/banner/baby3.png";
import baby2 from "../../assets/banner/baby2.png";
import baby1 from "../../assets/banner/baby1.png";
import ImgTxt from "../ImgTxt/ImgTxt";
import waves from "../../assets/waves.png";

const Team = () => {
  return (
    <div className="team-container">
      <img src={waves} alt="" className="waves-team" />

      <h1>The Team</h1>
      <div className="team">
        <ImgTxt className="member" name="Name Person" img={baby1} text="CEO" />
        <ImgTxt
          className="member"
          name="Name Person"
          img={baby2}
          text="Fullstack"
        />
        <ImgTxt
          className="member"
          name="Name Person"
          img={baby3}
          text="Artist"
        />
        <ImgTxt
          className="member"
          name="Name Person"
          img={baby4}
          text="Marketing"
        />
      </div>
    </div>
  );
};

export default Team;
