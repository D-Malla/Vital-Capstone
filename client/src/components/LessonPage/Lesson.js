import React, { useEffect } from "react"
import "../../styles/Lesson.css"

import LessonHeader from "./LessonHeader"
import LessonBody from "./LessonBody"
import LessonFooter from "./LessonFooter"


export default props => {

  useEffect(() => console.log(props));

  return (
    <div id="container">
      <LessonHeader props={props} />
      <LessonBody props={props} />
      <LessonFooter />
    </div>
  );
};
