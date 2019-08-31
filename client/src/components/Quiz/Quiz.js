import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getQuestions, getAnswers } from "../../actions/quiz.actions";
import "../../styles/Quiz.css";
import QuizHeader from "./QuizHeader";
import QuizFooter from "./QuizFooter";
export default props => {
  const questions = useSelector(appState => appState.quizReducer.questions);
  const answers = useSelector(appState => appState.quizReducer.answers);

  const [buttonState, setButtonState] = useState(false);

  // function disableButton() {
  //   if (clicked === true) {
  //     setButtonState(true);
  //   }
  // }

  useEffect(() => {
    // disableButton();
    getQuestions(props.match.params.parent_id);
  }, [props.parent_id]);

  useEffect(() => {
    getAnswers(props.match.params.parent_id);
  }, [props.question_id, props.parent_id]);

  console.log("props", props.match.params.question_id);
  console.log("answers", answers);
  console.log("questions", questions);

  function checkAnswer(correct) {
    if (correct === 1) {
      console.log("Smarty Pants");
    } else {
      console.log("Big Dummy");
    }
  }

  return (
    <div className="quiz-wrapper">
      <QuizHeader props={props} />

      {questions.map(item => {
        return (
          <div key={item.id}>
            <h1>{item.questions}</h1>;
            {answers.map(element => {
              if (element.question_id === item.question_id) {
                return (
                  <button
                    key={element.id}
                    onClick={e => checkAnswer(element.correct)}
                    className="answer-button"
                    disabled={buttonState}
                  >
                    {element.answers}
                    <div>{element.correct === 1 ? "Correct" : ""}</div>
                  </button>
                );
              }
            })}
          </div>
        );
      })}
      <QuizFooter />
    </div>
  );
};
