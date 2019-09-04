import React, { useEffect, useState, useRef } from "react";
import "../../styles/Quiz.css";
import { useSelector } from "react-redux";
import QuizQuestion from "./QuizQuestions.js";
import QuizHeader from "./QuizHeader";
import QuizFooter from "./QuizFooter";
import { getQuestions, getAnswers } from "../../actions/quiz.actions";
export default props => {
  const questions = useSelector(appState => appState.quizReducer.questions);
  const correct_answer = useSelector(
    appState => appState.quizReducer.correct_answer.length
  );
  useEffect(() => {
    getQuestions(props.match.params.parent_id);
  }, [props.parent_id]);

  return (
    <div className="quiz-wrapper">
      <QuizHeader props={props} />
      {correct_answer}
      {questions.map(item => (
        <QuizQuestion
          props={item}
          questions={questions}
          id={props.match.params.parent_id}
        />
      ))}
      <QuizFooter />
    </div>
  );
};
