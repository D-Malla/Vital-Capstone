import React, { useEffect, useState } from "react";
import { getLessonTitles, getLessonData } from "../../actions/vital.actions";
import { useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import ReactMarkDown from "react-markdown";

export default props => {
  // const titles = useSelector(appState => appState.vitalReducer.get_lessons);
  const lessonData = useSelector(appState => appState.vitalReducer.lesson_data);
  const [loadState, setLoadState] = useState(true);
  const id = props.props.match.params.id;

  function hideTransition() {
    if (loadState === true) {
      setTimeout(function() {
        setLoadState(false);
      }, 100);
    } else {
      setLoadState(false);
    }
  }

  function handleSubmit() {
    if (lessonData.id === 1) {
      props.props.history.push("/lesson/1/5");
    } else if (lessonData.id === 2) {
      props.props.history.push("/lesson/2/18");
    } else if (lessonData.id === 3) {
      props.props.history.push("/lesson/3/32");
    }
  }
  console.log(lessonData);

  useEffect(() => {
    getLessonData(id);
    hideTransition();
  }, [id]);

  return (
    <div id="lessonsBodyContainer">
      <div className="lessonsBody">
        <div className="lessonsIntroDiv">
          <LoadingOverlay
            active={loadState}
            spinner
            styles={{
              overlay: base => ({
                ...base,
                background: "white"
              })
            }}
            fadeSpeed={200}
          >
            <ReactMarkDown source={lessonData.intro} />
          </LoadingOverlay>
        </div>

        <button onClick={handleSubmit} className="link-button">
          lets go!
        </button>
        <LoadingOverlay
          active={loadState}
          spinner
          styles={{
            overlay: base => ({
              ...base,
              background: "white"
            })
          }}
          fadeSpeed={200}
        ></LoadingOverlay>
      </div>
    </div>
  );
};
