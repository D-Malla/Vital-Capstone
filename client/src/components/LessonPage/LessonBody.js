import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { matchLessons, getLessonTitles } from "../../actions/vital.actions";
export default props => {
  const title = useSelector(appState => appState.lessons_title);
  const lessons_list = useSelector(appState => appState.get_lessons);
  const lesson = props.props.match.params.lesson;
  const id = props.props.match.params.id;

  useEffect(() => {
    console.log(props);
    matchLessons(lesson);
    getLessonTitles(id);
    console.log(lessons_list);
  }, [lesson, id]);
  return (
    <div id="lessonBodyContainer">
      <aside className="lessonAside">
        {lessons_list.map(item => (
          <div>
            <Link to={"/lesson/" + item.lesson + "/" + item.parent_id}>
              {item.lesson}
            </Link>
          </div>
        ))}
      </aside>
      <article className="lessonBody"></article>
      <div>
        <button type="button">PREV</button>
        <button type="button">CONTINUE</button>
      </div>
    </div>
  );
};
