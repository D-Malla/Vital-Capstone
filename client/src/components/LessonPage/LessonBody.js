import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import {
  getLessonTitles,
  getLessonData,
  matchLessons
} from "../../actions/vital.actions";

export default props => {
  const lessons_list = useSelector(appState => appState.get_lessons);
  const lesson_data = useSelector(appState => appState.lesson_data);
  let id = props.id;
  const inid = props.inid;

  //Grab the numbers and increment or decrement by 1 in order to change pages
  const prev_id = Number(inid) - 1;
  const next_id = Number(inid) + 1;

  useEffect(() => {
    getLessonTitles(id);
    getLessonData(inid);
  }, [props.id, props.inid]);

  return (
    <div id="lessonBodyContainer">
      <aside className="lessonAside">
        {lessons_list.map(item => (
            <Link key={item.id} className="lesson-links" to={"/lesson" + "/" + item.parent_id + "/" + item.id}
            >
              {item.lesson}
            </Link>
        ))}
        <button className="link-button">
          <Link to="/lesson/1/4">HTML</Link>
        </button>
        <button className="link-button">
          <Link to="/lesson/2/17">CSS</Link>
        </button>
        <button className="link-button">
          <Link to="/lesson/3/31">JAVASCRIPT</Link>
        </button>
      </aside>
      <div>
        <div className='lessonBodyDiv'>
          <article className="lessonBody">
            <ReactMarkdown source={lesson_data.lesson_description} />
          </article>
        </div>
        <div className='lessonButtonDiv'>
          {prev_id > 3 ? (
            <button className="link-button" type="button">
              <Link to={"/lesson/" + id + "/" + prev_id}>PREV</Link>
            </button>
          ) : (
            ""
          )}
          {console.log(next_id)}
          {next_id !== 41 ? (
            <button className="link-button" type="button">
              <Link to={"/lesson/" + id + "/" + next_id}>CONTINUE</Link>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
