import React, { useEffect } from "react";
import "../../styles/Lesson.css";

import LessonHeader from "./LessonHeader";
import LessonBody from "./LessonBody";
import LessonFooter from "./LessonFooter";
import { useSelector } from "react-redux";

export default props => {
  const title = useSelector(appState => appState.lessons_title);

  useEffect(() => console.log(props));
  return (
    <div id="container">
      <LessonHeader props={props} />
      <LessonBody props={props} />
      <LessonFooter />
    </div>
  );
};
