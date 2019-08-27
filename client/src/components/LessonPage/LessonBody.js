import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
  console.log(lesson_data);

  useEffect(() => {
    console.log(props);
    matchLessons(lesson);
    getLessonTitles(id);
    console.log(lessons_list);
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
      </aside>
      <article className="lessonBody">
        {lesson_data.map(item => {
          return <p key={item.id}>{item.lesson_description}</p>;
        })}
      </article>
      <div>
        <button type="button">PREV</button>
        <button type="button">CONTINUE</button>
      </div>
    </div>
  );
};
