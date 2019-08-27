import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { lessonsTitle } from "../../actions/vital.actions";

export default props => {
  const title = useSelector(appState => appState.lessons_title);

  useEffect(() => {
    lessonsTitle();
  }, []);

  // markdown, markdown renderer use that to store content

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
            <div>
              <Link
                to={"/lessons/" + item.lesson + "/" + item.id}
                className="link"
              ></Link>
              <p>{item.lesson_description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
