import React, { useEffect } from "react";
import "../../styles/Quiz.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import QuizQuestion from "./QuizQuestions.js";
import QuizHeader from "./QuizHeader";
import QuizFooter from "./QuizFooter";
import { getQuestions, clearAnswers } from "../../actions/quiz.actions";
export default props => {
  const questions = useSelector(appState => appState.quizReducer.questions);
  //tracks the correct answers the user inputs
  const correct_answer = useSelector(
    appState => appState.quizReducer.correct_answer.length
  );
  //tracks the total amount of questions answered so the appropiet button will appear when the user finishes the quiz
  const total_answers = useSelector(
    appState => appState.quizReducer.total_answers.length
  );
  useEffect(() => {
    clearAnswers();
    getQuestions(props.match.params.parent_id);
  }, [props.parent_id]);

  return (
    <div className="quiz-wrapper">
      <QuizHeader props={props} />

      {correct_answer}
      {"/"}
      {questions.length}

      {questions.map(item => (
        <QuizQuestion
          props={item}
          questions={questions}
          id={props.match.params.parent_id}
          key={item.id}
        />
      ))}
      {console.log(total_answers == questions.length)}
      {correct_answer / questions.length > 0.7 ? (
        <button>
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

      {total_answers === questions.length &&
      correct_answer / questions.length < 0.7 ? (
        <button>
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
      <QuizFooter />
    </div>
  );
};
