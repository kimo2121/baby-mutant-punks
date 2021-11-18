import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";

const Navbar = () => {
  const [state, setstate] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="internal-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/attributes">Attributes</a>
        <WalletMultiButton className="mob-connect-btn" />
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
        <WalletMultiButton className="mob-connect-btn" />
      </div>
    </div>
  );
};

export default Navbar;
