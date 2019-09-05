import React, { useEffect, useState } from "react";
import "../../styles/Quiz.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import QuizQuestion from "./QuizQuestions.js";
import QuizHeader from "./QuizHeader";
import QuizFooter from "./QuizFooter";
import LoadingOverlay from "react-loading-overlay";
import {
  getQuestions,
  clearAnswers,
  getAnswers
} from "../../actions/quiz.actions";
export default props => {
  const questions = useSelector(appState => appState.quizReducer.questions);
  const [loadState, setLoadState] = useState(true);

  //tracks the correct answers the user inputs
  const correct_answer = useSelector(
    appState => appState.quizReducer.correct_answer.length
  );
  //tracks the total amount of questions answered so the appropriate button will appear when the user finishes the quiz
  const total_answers = useSelector(
    appState => appState.quizReducer.total_answers.length
  );

  function hideTransition() {
    if (loadState === true) {
      setTimeout(function() {
        setLoadState(false);
      }, 100);
    } else {
      setLoadState(false);
    }
  }

  useEffect(() => {
    clearAnswers();
    hideTransition();
    getQuestions(props.match.params.parent_id);
  }, [props.match.params.parent_id]);

  return (
    <div className="quiz-wrapper">
      <QuizHeader props={props} />
      <LoadingOverlay
        active={loadState}
        styles={{
          overlay: base => ({
            ...base,
            background: "white"
          })
        }}
        fadeSpeed={200}
      >
        {questions.map(item => (
          <QuizQuestion
            props={item}
            questions={questions}
            id={props.match.params.parent_id}
            key={item.id}
          />
        ))}
        <div className="finish-wrapper">
          {console.log(total_answers == questions.length)}
          {correct_answer / questions.length > 0.7 ? (
            <button className="finish-button">
              {console.log(total_answers === questions.length, total_answers)}
              {props.match.params.parent_id == 1 ? (
                <Link to={"/lesson/" + 2 + "/" + 17}>Next Lesson</Link>
              ) : (
                <Link to={"/lesson/" + 3 + "/" + 31}>Next Lesson</Link>
              )}
            </button>
          ) : (
            ""
          )}
          {console.log(total_answers)}
          {total_answers === questions.length &&
          correct_answer / questions.length < 0.7 ? (
            <button className="finish-button">
              {props.match.params.parent_id == 1 &&
              props.match.params.parent_id !== 2 &&
              props.match.params.parent_id !== 3 ? (
                <Link to={"/lesson/" + 1 + "/" + 4}>Review</Link>
              ) : props.match.params.parent_id == 2 &&
                props.match.params.parent_id !== 1 &&
                props.match.params.parent_id !== 3 ? (
                <Link to={"/lesson/" + 2 + "/" + 17}>Review</Link>
              ) : (
                <Link to={"/lesson/" + 3 + "/" + 31}>Review</Link>
              )}
            </button>
          ) : (
            ""
          )}

          {total_answers === questions.length ? (
            <div className="total-correct">
              {correct_answer}
              {"/"}
              {questions.length}
              {" correct"}
            </div>
          ) : (
            ""
          )}
        </div>
      </LoadingOverlay>
      <QuizFooter />
    </div>
  );
};
