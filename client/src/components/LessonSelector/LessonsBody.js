import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { matchLessons } from "../../actions/vital.actions";
import { useSelector } from "react-redux";
export default props => {
  const title = useSelector(appState => appState.lessons_title);
  // const slug = props.match.params.slug;
  useEffect(() => {
    matchLessons();
  }, []);
  console.log(title);
  return (
    <div id="lessonsBodyContainer">
      <div className="lessonsBody">
        {/* {title.map(item => (
          <div>
            {item.subcat.map(sub => (
              <div>{sub.lesson}</div>
            ))}
          </div>
        ))} */}
      </div>
    </div>
  );
};
