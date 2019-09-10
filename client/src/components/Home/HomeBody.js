import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { lessonsTitle } from "../../actions/vital.actions";


export default props => {
  const title = useSelector(appState => appState.vitalReducer.lessons_title);
  useEffect(() => {
    lessonsTitle();
  }, []);

  // markdown, markdown renderer use that to store content
  console.log(title);
  return (
    <div id="homeBodyContainer">
      <div className="homeImage">
        <h1>WELCOME!</h1>
      </div>
      <div className="classSelectorDiv">
        {title.map(item => (
          <Link
            key={item.id}
            to={"/lessons/" + item.lesson + "/" + item.id}
            className="link"
          >
            <div key={item.lesson} className="classSelector ">
              <div>
                <h3> {item.lesson}</h3>
                <p>{item.lesson_description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
