import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getLessonTitles, getLessonData } from "../../actions/vital.actions";
import { useSelector } from "react-redux";
import ReactMarkDown from "react-markdown";
export default props => {
  const titles = useSelector(appState => appState.get_lessons);
  // const lesson_data = useSelector(appState => appState.lesson_data);

  const id = props.props.match.params.id;
  useEffect(() => {
    getLessonTitles(id);
    // getLessonData(props.props.match.params.inid);

    console.log(id);
  }, [id]);

  return (
    <div id="lessonsBodyContainer">
      <div className="lessonsBody">
        {titles.map(item => (
          <div key={item.id} >
            <Link to={"/lesson/" + item.parent_id + "/" + item.id} className="indi-lessons">
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
      </div>
      {/* <ReactMarkDown source={lesson_data.lesson_description} /> */}
    </div>
  );
};
