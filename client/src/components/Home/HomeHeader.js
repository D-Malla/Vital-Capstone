<<<<<<< HEAD
import React from "react";
import Img from "../../assets/Vital.png";
=======
import React from 'react'
import Img from  '../../assets/Vital.png'

>>>>>>> 4a6c696801a2af7c5920ec3e4f3a39f7d9b97d85

export default (props, { message }) => {
  return (
    <header id="homeHeaderContainer">
      <div className="logoDiv">
        <img src={Img} alt="Vital Logo" />
      </div>
      <div className="catchphraseDiv">
        <h1>CODING MADE SIMPLE!</h1>
      </div>
    </header>
  );
};
