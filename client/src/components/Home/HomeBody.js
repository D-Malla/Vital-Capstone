import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { lessonsTitle } from "../../actions/vital.actions";

export default props => {
  const title = useSelector(appState => appState.vitalReducer.lessons_title);
  console.log(title);
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
        <Link to="/lesson/1/4" className="link">
          <div className="classSelector">
            <h3>HTML</h3>
            <p>THE BASIC STRUCTURE OF A WEBSITE</p>
          </div>
        </Link>

        <Link to="/lesson/2/17" className="link">
          <div className="classSelector">
            <h3>CSS</h3>
            <p>THE PRESENTATION, FORMATTING AND LAYOUT</p>
          </div>
        </Link>

        <Link to="/lesson/3/31" className="link">
          <div className="classSelector">
            <h3>JAVASCRIPT</h3>
            <p>THE FUNCTIONALITY AND CONTROL OF ELEMENTS</p>
          </div>
        </Link>

        {/* {title.map(item => (
          <Link to={"/lessons/" + item.lesson + "/" + item.id} className="link">
            <div key={item.lesson} className="classSelector ">
              <div>
                <h3> {item.lesson}</h3>
                <p>{item.lesson_description}</p>
              </div>
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
};
