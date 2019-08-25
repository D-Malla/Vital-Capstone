import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { lessonsTitle } from "../../actions/vital.actions";
export default props => {
  const title = useSelector(appState => appState.lessons_title);

  useEffect(() => {
    lessonsTitle();
  }, []);

  return (
    <div id="homeBodyContainer">
      <div className="homeImage"></div>
      <div className="imgOverlay"></div>
      <div className="greeting">
        <h1>WELCOME!</h1>
      </div>

      <div className="classSelectorDiv">
        {console.log(title)}

        {title.map(item => (
          <div key={item.lesson} className="classSelector">
            <Link className="link" to={"/lessons/" + item.slug}>
              <h3> {item.lesson}</h3>
              <p>{item.lesson_description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
