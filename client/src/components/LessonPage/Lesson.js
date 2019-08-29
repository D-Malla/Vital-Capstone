import React, { useEffect, useCallback } from "react";
import "../../styles/Lesson.css";
import { useSelector } from "react-redux";

import LessonHeader from "./LessonHeader";
import LessonBody from "./LessonBody";
import LessonFooter from "./LessonFooter";

import { getLessonData } from "../../actions/vital.actions";

export default props => {
  const lesson_data = useCallback(() => {
    useSelector(appState => appState.lesson_data);
  }, []);

  useEffect(() => {
    getLessonData(props.match.params.inid);
  }, [props.match.params.inid]);
  useEffect(() => {
    checkParent();
  }, [lesson_data]);

  function checkParent() {
    if (lesson_data.parent_id !== undefined) {
      console.log(Number(props.match.params.id));
      console.log(lesson_data.parent_id);

      if (lesson_data.parent_id !== Number(props.match.params.id)) {
        console.log("Mismatch");
        console.log(Number(props.match.params.id));
        console.log(lesson_data.parent_id);
        props.history.push(
          "/lesson/" + lesson_data.parent_id + "/" + lesson_data.id
        );
      }
    }
  }

  return (
    <div id="container">
      <LessonHeader inid={props.match.params.inid} />
      <LessonBody id={props.match.params.id} inid={props.match.params.inid} />
      <LessonFooter />
    </div>
  );
};
