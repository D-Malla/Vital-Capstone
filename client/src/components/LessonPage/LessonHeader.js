import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../styles/Lesson.css";
import { getLessonData } from "../../actions/vital.actions";
import Img from "../../assets/Vital.png";
import LoadingOverlay from "react-loading-overlay";

export default props => {
  const lesson_data = useSelector(appState => appState.lesson_data);
  useEffect(() => getLessonData(props.inid), [props.inid]);
  const [loadState, setLoadState] = useState(true);

  function hideTransition() {
    if (loadState === true) {
      setTimeout(function() {
        setLoadState(false);
      }, 100);
    } else {
      setLoadState(false);
    }
  }

  useEffect(() => {
    hideTransition();
  }, []);

  return (
    <header id="lessonHeaderContainer">
      <Link to="/">
        <div className="logoDiv">
          <img src={Img} alt="Vital Logo" />
        </div>
      </Link>
      <div className="catchphraseDiv">
        <a href="http://react-tetris.surge.sh/">
          <h1>
            <LoadingOverlay
              active={loadState}
              styles={{
                overlay: base => ({
                  ...base,
                  background: "rgba(72, 72, 72, 1)"
                })
              }}
              fadeSpeed={100}
            >
              {lesson_data.lesson}
            </LoadingOverlay>
          </h1>
        </a>
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
