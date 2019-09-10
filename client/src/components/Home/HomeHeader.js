import React from "react";
import Img from "../../assets/Vital.png";

export default (props, { message }) => {
  return (
    <header id="homeHeaderContainer">
      <div className="logoDiv">
        <img src={Img} alt="Vital Logo" />
      </div>
      <div className="catchphraseDiv">
        <h1>CODING MADE SIMPLE</h1>
      </div>
    </header>
  );
};
