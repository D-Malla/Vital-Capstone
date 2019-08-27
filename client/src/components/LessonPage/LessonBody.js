import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import {
  matchLessons,
  getLessonTitles,
  getLessonData
} from "../../actions/vital.actions";

export default props => {
  const title = useSelector(appState => appState.lessons_title);
  const lessons_list = useSelector(appState => appState.get_lessons);
  const lesson_data = useSelector(appState => appState.lesson_data);
  const lesson = props.props.match.params.lesson;
  const id = props.props.match.params.id;

  useEffect(() => {
    matchLessons(lesson);
    getLessonTitles(id);

    getLessonData(props.props.match.params.inid);
  }, [lesson, id, props.props.match.params.inid]);
  return (
    <div id="lessonBodyContainer">
      <aside className="lessonAside">
        {lessons_list.map(item => (
          <div key={item.id}>
            <Link
              to={
                "/lesson/" + item.lesson + "/" + item.parent_id + "/" + item.id
              }
            >
              {item.lesson}
            </Link>
          </div>
        ))}
        <button className="link-button">
          <Link to="/lessons/HTML/1">HTML</Link>
        </button>
        <button className="link-button">
          <Link to="/lessons/CSS/1">CSS</Link>
        </button>
        <button className="link-button">
          <Link to="/lessons/JAVASCRIPT/1">JAVASCRIPT</Link>
        </button>
      </aside>
      <article className="lessonBody">
        {lesson_data.map(item => {
          let lesson_data = item.lesson_description;
          return (
            <p key={item.id}>
              <ReactMarkdown source={lesson_data} />
            </p>
          );
        })}
      </article>
      <div>
        <button type="button">PREV</button>
        <button type="button">CONTINUE</button>
      </div>
    </div>
  );
};
