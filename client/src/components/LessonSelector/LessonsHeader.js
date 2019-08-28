import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Lesson.css";
import { lessonsTitle } from "../../actions/vital.actions";
import Img from "../../assets/Vital.png";

export default props => {
  const lesson = props.props.match.params.slug;

  // useEffect(() => lessonsTitle(), []);
  return (
    <header id="lessonHeaderContainer">
      <Link to="/">
        <div className="logoDiv">
          <img src={Img} alt="Vital Logo" />
        </div>
      </Link>
      <div className="catchphraseDiv">
        <h1>{lesson}</h1>
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
