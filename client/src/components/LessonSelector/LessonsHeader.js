<<<<<<< HEAD
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
=======
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "../../styles/Lesson.css"
import { lessonsTitle } from "../../actions/vital.actions"

export default props => {
  const lesson = props.props.match.params.slug;

  useEffect(() => lessonsTitle(), []);
>>>>>>> aa79a119c84f25ba99dfce76d0d9c5673d05b0ee
  return (
    <header id="lessonHeaderContainer">
      <Link to="/">
        <div className="logoDiv">
          <h1>Vital</h1>
        </div>
      </Link>
      <div className="catchphraseDiv">
<<<<<<< HEAD
        {/* {title.map(item => (
          <div key={item.lesson} className="classSelector">
            <div>
              <h1> {item.lesson}</h1>
            </div>
          </div>
        ))} */}
=======
        <h1>{lesson}</h1>
>>>>>>> aa79a119c84f25ba99dfce76d0d9c5673d05b0ee
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
