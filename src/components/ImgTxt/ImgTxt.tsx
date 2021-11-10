import React from "react";
import "./styles.css";

interface ImgTxtTypes {
  className?: string;
  name?: string;
  text?: string;
  img?: string;
}

const ImgTxt: React.FC<ImgTxtTypes> = ({ className, name, text, img }) => {
  return (
    <div className={className}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <span>{text}</span>
    </div>
  );
};

export default ImgTxt;
