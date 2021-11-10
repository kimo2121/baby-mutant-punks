import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <img src={logo} alt="" />
        <div className="footer-divider"></div>
        <p>
          Baby Mutant Punks is not in any association with Crypto Punks or
          Larvalabs
        </p>
      </div>
      <div className="down-footer">
        <span>Copyright 2021 © Baby Mutant Punks</span>
      </div>
    </div>
  );
};

export default Footer;
