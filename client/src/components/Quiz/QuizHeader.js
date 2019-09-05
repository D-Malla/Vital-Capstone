import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../styles/Lesson.css";
import { getQuestions } from "../../actions/quiz.actions";
import Img from "../../assets/Vital.png";
import LoadingOverlay from "react-loading-overlay";

export default props => {
  const questions = useSelector(appState => appState.quizReducer.questions);

  useEffect(() => {
    getQuestions(props.props.match.params.parent_id);
  }, [props.props.parent_id]);

  return (
    <header id="lessonHeaderContainer">
      <Link to="/">
        <div className="logoDiv">
          <img src={Img} alt="Vital Logo" />
        </div>
      </Link>
      <div className="catchphraseDiv">
        <h1>
          {/* <LoadingOverlay
              active={loadState}
              styles={{
                overlay: base => ({
                  ...base,
                  background: "rgba(72, 72, 72, 1)"
                })
              }}
              fadeSpeed={100}
            > */}
          {/* {questions.map(item => (
            <div>
              <h1>{item.cat_slug}</h1>
              {console.log(item.cat_slug[0])}
            </div>
          ))} */}

          {/* </LoadingOverlay> */}
        </h1>
      </div>
      <div className="userButtonDiv"></div>
    </header>
  );
};
