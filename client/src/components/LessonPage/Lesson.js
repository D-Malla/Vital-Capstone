import React from "react";
import "../../styles/Lesson.css";

import LessonHeader from "./LessonHeader";
import LessonBody from "./LessonBody";
import LessonFooter from "./LessonFooter";

export default props => {
  console.log(props);
  return (
    <div id="container">
      <LessonHeader inid={props.match.params.inid} />
      <LessonBody id={props.match.params.id} inid={props.match.params.inid} />
      <LessonFooter />
    </div>
  );
};
