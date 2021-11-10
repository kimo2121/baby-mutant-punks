import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
const Navbar = () => {
  const [state, setstate] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="internal-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/attributes">Attributes</a>
        <button className="connect-btn">CONNECT WALLET</button>
      </div>
      <div className={state ? "mob-menu active" : "mob-menu"}>
        <Close onClick={() => setstate(false)} className="close-icon" />
        <a onClick={() => setstate(false)} href="/">
          Home
        </a>
        <a onClick={() => setstate(false)} href="/about">
          About Us
        </a>
        <a onClick={() => setstate(false)} href="/attributes">
          Attributes
        </a>
      </div>
      <div className="mob-menu-btn-container">
        <Menu onClick={() => setstate(true)} className="menu-icon" />
        <button className="mob-connect-btn">CONNECT WALLET</button>
      </div>
    </div>
  );
};

export default Navbar;
