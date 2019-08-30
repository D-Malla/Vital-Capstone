import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Lesson.css";
import Img from "../../assets/Vital.png";
import LoadingOverlay from "react-loading-overlay";

export default props => {
  const lesson = props.props.match.params.slug;
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
  useEffect(() => hideTransition(), []);

  return (
    <header id="lessonHeaderContainer">
      <Link to="/">
        <div className="logoDiv">
          <img src={Img} alt="Vital Logo" />
        </div>
      </Link>
      <div className="catchphraseDiv">
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
          <h1>{lesson}</h1>
        </LoadingOverlay>
      </div>
      <div className="userButtonDiv">
      </div>
    </header>
  );
};
