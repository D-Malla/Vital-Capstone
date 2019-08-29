import React from "react";
import "../../styles/Lesson.css";

import LessonHeader from "./LessonHeader";
import LessonBody from "./LessonBody";
import LessonFooter from "./LessonFooter";

export default props => {
  return (
    <div id="lessonContainer">
      <LessonHeader inid={props.match.params.inid} />
      <LessonBody id={props.match.params.id} inid={props.match.params.inid} />
      <LessonFooter />
    </div>
  );
};
