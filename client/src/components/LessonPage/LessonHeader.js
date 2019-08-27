import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../../styles/Lesson.css";
import { matchLessons } from "../../actions/vital.actions";

export default props => {
  const lesson = props.props.match.params.lesson;

  useEffect(() => matchLessons(lesson), [lesson]);
  return (
    <header id="lessonHeaderContainer">
      <Link to="/">
        <div className="logoDiv">
          <h1>Vital</h1>
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
