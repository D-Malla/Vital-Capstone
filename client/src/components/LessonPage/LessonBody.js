import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import LoadingOverlay from "react-loading-overlay";

import { getLessonTitles, getLessonData } from "../../actions/vital.actions";

export default props => {
  const lessons_list = useSelector(
    appState => appState.vitalReducer.get_lessons
  );
  const lesson_data = useSelector(
    appState => appState.vitalReducer.lesson_data
  );

  // This state is for the transition effect
  const [loadState, setLoadState] = useState(true);

  let id = props.id;
  const inid = props.inid;
  console.log(id);
  //Grab the numbers and increment or decrement by 1 in order to change pages
  const prev_id = Number(inid) - 1;
  const next_id = Number(inid) + 1;

  function hideTransition() {
    if (loadState === true) {
      setTimeout(function() {
        setLoadState(false);
      }, 100);
    } else {
      setLoadState(false);
    }
  }
  //This useEffects handle the transition between topics as well as handle the transition overlay
  useEffect(() => {
    hideTransition();
    getLessonData(inid);
  }, [props.id, props.inid]);
  useEffect(() => {
    getLessonTitles(lesson_data.parent_id);
  }, [lesson_data]);

  return (
    <div id="lessonBodyContainer">
      <aside className="lessonAside">
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
          <div>
            {lessons_list.map(item => (
              <Link
                key={item.id}
                className="lesson-links"
                to={"/lesson" + "/" + item.parent_id + "/" + item.id}
              >
                {item.lesson}{" "}
              </Link>
            ))}
          </div>
          <div className="lessonCourseDiv">
            <Link className="aLink" to="/lesson/1/4">
              <button className="link-button">HTML</button>
            </Link>
            <Link className="aLink" to="/lesson/2/17">
              <button className="link-button">CSS</button>
            </Link>
            <Link className="aLink" to="/lesson/3/31">
              <button className="link-button">JAVASCRIPT</button>
            </Link>
          </div>
        </LoadingOverlay>
      </aside>

      <div>
        {/* The following code adds loading overlay onto the items and renders out both the lesson descriptions and the next and continue buttons */}

        <LoadingOverlay
          active={loadState}
          spinner
          styles={{
            overlay: base => ({
              ...base,
              background: "white"
            })
          }}
          fadeSpeed={100}
        >
          <div className="lessonBodyDiv">
            <article className="lessonBody">
              <ReactMarkdown source={lesson_data.lesson_description} />
            </article>
          </div>

          <div className="lessonButtonDiv">
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
              {prev_id > 3 ? (
                <Link className="aLink" to={"/lesson/" + id + "/" + prev_id}>
                  <button className="link-button" type="button">
                    PREV
                  </button>
                </Link>
              ) : (
                ""
              )}
              {console.log(next_id)}
              {next_id !== 42 ? (
                <Link className="aLink" to={"/lesson/" + id + "/" + next_id}>
                  <button className="link-button" type="button">
                    CONTINUE
                  </button>
                </Link>
              ) : (
                ""
              )}
              {lesson_data.last_lesson === 1 ? (
                <Link
                  className="aLink"
                  to={
                    "/quiz/" +
                    lesson_data.parent_id +
                    "/" +
                    lesson_data.parent_id
                  }
                >
                  <button className="link-button" type="button">
                    Quiz
                  </button>
                </Link>
              ) : (
                ""
              )}
            </LoadingOverlay>
          </div>
        </LoadingOverlay>
      </div>
    </div>
  );
};
