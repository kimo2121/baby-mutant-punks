import React from "react";
import Collection from "../../components/Collection/Collection";
import CustomizedAccordions from "../../components/FAQ/FAQ";
import MintComponent from "../../components/MintComponent/MintComponent";
import MutantPunks from "../../components/MutantPunks/MutantPunks";
import MutantPunks2 from "../../components/MutantPunks2/MutantPunks2";
import Roadmap from "../../components/Roadmap/Roadmap";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="bk1">
        <MutantPunks />
      </div>
      <div className="bk2">
        <MintComponent />
      </div>
      <div className="bk1">
        <MutantPunks2 />
      </div>
      <div className="bk2">
        <Roadmap />
      </div>
      <div className="bk1">
        <Collection />
      </div>
      <div className="bk2">
        <CustomizedAccordions />
      </div>
    </div>
  );
};

export default Home;
