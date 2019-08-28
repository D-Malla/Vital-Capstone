import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../styles/Lesson.css";
import { getLessonData } from "../../actions/vital.actions";
import Img from "../../assets/Vital.png";

export default props => {
  const lesson_data = useSelector(appState => appState.lesson_data);
  useEffect(() => getLessonData(props.inid), [props.inid]);

  return (
    <header id="lessonHeaderContainer">
      <Link to="/">
        <div className="logoDiv">
          <img src={Img} alt="Vital Logo" />
        </div>
      </Link>
      <div className="catchphraseDiv">
        <h1>{lesson_data.lesson}</h1>
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
