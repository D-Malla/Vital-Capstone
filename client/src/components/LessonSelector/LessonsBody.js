import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {  getLessonTitles } from "../../actions/vital.actions";
import { useSelector } from "react-redux";

export default props => {
  const titles= useSelector(appState => appState.get_lessons);
  const id = props.props.match.params.id
  useEffect(() => {
    getLessonTitles(id);
    console.log(id)
  }, [id]);

  return (
    <div id="lessonsBodyContainer">
      <div className="lessonsBody">
        {titles.map(item => (
              <div key={item.id} className="indi-lessons">
              <Link to={"/lesson/" + item.lesson + "/" + item.parent_id}>
              {item.lesson}
              </Link>
            </div>
        ))}
      </div>
    </div>
  );
};
