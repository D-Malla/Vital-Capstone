import React from "react";
import "../../styles/Lessons.css";
import { Link } from "react-router-dom";
export default props => {
  return (
    <header id="lessonsHeaderContainer">
      <div className="logoDiv">
        <Link to="/">
          <h1>Vital</h1>
        </Link>
      </div>
      <div className="catchphraseDiv">
        <h1>Coding Made Simple!</h1>
      </div>
      <div className="userButtonDiv">
        <button className="userButtons" type="button">
          Student
        </button>
        <button className="userButtons" type="button">
          Administrator
        </button>
      </div>
    </header>
  );
};
