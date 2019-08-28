import React, { useEffect } from "react";
import "../../styles/Lesson.css";

import LessonHeader from "./LessonHeader";
import LessonBody from "./LessonBody";
import LessonFooter from "./LessonFooter";

import { getLessonData } from "../../actions/vital.actions";

export default props => {
  // useEffect(() => );

  return (
    <div id="container">
      <LessonHeader inid={props.match.params.inid} />
      <LessonBody id={props.match.params.id} inid={props.match.params.inid} />
      <LessonFooter />
    </div>
  );
};
