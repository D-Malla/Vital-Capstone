import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLessonTitles, getLessonData } from "../../actions/vital.actions";
import { useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import ReactMarkDown from "react-markdown";

export default props => {
  const titles = useSelector(appState => appState.get_lessons);
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

  useEffect(() => {
    getLessonTitles(id);
    hideTransition();
  }, [id]);

  return (
    <div id="lessonsBodyContainer">
      <div className="lessonsBody">
        {titles.map(item => (
          <div key={item.id}>
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
              <Link
                to={"/lesson/" + item.parent_id + "/" + item.id}
                className="indi-lessons"
              >
                {item.lesson}
              </Link>
            </LoadingOverlay>
          </div>
        ))}
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
          <button className="link-button">
            <Link to="/lesson/1/4">HTML</Link>
          </button>
          <button className="link-button">
            <Link to="/lesson/2/17">CSS</Link>
          </button>
          <button className="link-button">
            <Link to="/lesson/3/31">JAVASCRIPT</Link>
          </button>
        </LoadingOverlay>
      </div>
      {/* <ReactMarkDown source={lesson_data.lesson_description} /> */}
    </div>
  );
};
