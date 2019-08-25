import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Lesson.css";

export default props => {
  return (
    <header id="lessonHeaderContainer">
      <Link to="./">
        <div className="logoDiv">
          <h1>Vital</h1>
        </div>
      </Link>
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
