import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/Quiz.css";
import { getAnswers, getCorrectAnswer } from "../../actions/quiz.actions";

export default props => {
  const answers = useSelector(appState => appState.quizReducer.answers);

  const [buttonState, setButtonState] = useState(false);
  useEffect(() => {
    getAnswers(props.id);
  }, []);

  function disableButton(buttonState) {
    if (buttonState === false) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }

  function checkAnswer(correct) {
    setButtonState(!buttonState);

    if (correct === 1) {
      getCorrectAnswer(correct);

      console.log("Smarty Pants");
    } else {
      console.log("Big Dummy");
    }
  }
  return (
    <div>
      <h1>{props.props.questions}</h1>
      {answers.map(element =>
        element.question_id === props.props.question_id ? (
          <button
            onClick={e => checkAnswer(element.correct)}
            disabled={buttonState}
          >
            {element.answers}
          </button>
        ) : (
          ""
        )
      )}
    </div>
  );
};
