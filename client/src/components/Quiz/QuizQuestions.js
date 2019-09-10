import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/Quiz.css";
import {
  getAnswers,
  getCorrectAnswer,
  getTotalAnswers
} from "../../actions/quiz.actions";

export default props => {
  const answers = useSelector(appState => appState.quizReducer.answers);

  const [buttonState, setButtonState] = useState(false);
  const [correctState, setCorrectState] = useState("hide");

  useEffect(() => {
    getAnswers(props.id);
  }, [props.id]);

  function checkAnswer(correct) {
    setButtonState(!buttonState);

    if (correct === 1) {
      getCorrectAnswer("correct");
      getTotalAnswers("total");
      setCorrectState("show");
 
    } else {
      setCorrectState("show");
      getTotalAnswers("total");

    }
  }

  function handleClick(correct) {
    checkAnswer(correct);
  }
  return (
    <div className="question-wrapper">
      <h1>{props.props.questions}</h1>
      {answers.map(element =>
        element.question_id === props.props.question_id ? (
          <div className="button-wrapper " key={element.id}>
            {/* this hide the correct div and then uses state to show the div once it has been clicked */}
            {element.correct === 1 ? (
              <div className={correctState}>
                <span className="correct-box">Correct</span>
              </div>
            ) : (
              ""
            )}
            <button
              onClick={e => handleClick(element.correct)}
              disabled={buttonState}
              className="answer-button"
            >
              {element.answers}
            </button>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};
