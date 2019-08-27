import React, { useEffect } from "react";
import "../../styles/Lessons.css";
import { Link } from "react-router-dom";
import { lessonsTitle } from "../../actions/vital.actions";
import { useSelector } from "react-redux";

export default props => {
  const title = useSelector(appState => appState.lessons_title);

  useEffect(() => {
    lessonsTitle();
  }, []);
  return (
    <header id="lessonsHeaderContainer">
      <div className="logoDiv">
        <Link to="/">
          <h1>Vital</h1>
        </Link>
      </div>
      <div className="catchphraseDiv">
        {/* {title.map(item => (
          <div key={item.lesson} className="classSelector">
            <div>
              <h1> {item.lesson}</h1>
            </div>
          </div>
        ))} */}
      </div>
      <div className="userButtonDiv">
        <button className="userButtons" type="button">
          Student
        </button>
        <button className="userButtons" type="button">
          Administrator
        </button>
      </div>
    </header>
  );
};
