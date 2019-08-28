import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import { getLessonTitles, getLessonData } from "../../actions/vital.actions";

export default props => {
  const lessons_list = useSelector(appState => appState.get_lessons);
  const lesson_data = useSelector(appState => appState.lesson_data);
  const id = props.props.match.params.id;
  const prev_id = Number(props.props.match.params.inid) - 1;
  const next_id = Number(props.props.match.params.inid) + 1;

  useEffect(() => {
    getLessonTitles(id);
    getLessonData(props.props.match.params.inid);
  }, [props.props.match.params]);

  return (
    <div id="lessonBodyContainer">
      <aside className="lessonAside">
        {lessons_list.map(item => (
          <div key={item.id}>
            <Link
              className="lesson-links"
              to={"/lesson" + "/" + item.parent_id + "/" + item.id}
            >
              {item.lesson}
            </Link>
          </div>
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
      <article className="lessonBody">
        <ReactMarkdown source={lesson_data.lesson_description} />
      </article>
      <div>
        <button type="button">
          <Link to={"/lesson/" + id + "/" + prev_id}>PREV</Link>

          {/* <Link to={"/lesson/" + prev_cat + "/" + prev_id} /> */}
        </button>
        <button
          className="next-category"
          type="button"
          disabled={next_id == 40}
        >
          <Link to={"/lesson/" + id + "/" + next_id}>CONTINUE</Link>
        </button>
      </div>
    </div>
  );
};
