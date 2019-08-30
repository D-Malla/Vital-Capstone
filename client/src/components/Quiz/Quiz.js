import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getQuestions, getAnswers } from "../../actions/quiz.actions";

export default props => {
  const questions = useSelector(appState => appState.quizReducer.questions);
  const answers = useSelector(appState => appState.quizReducer.answers);

  useEffect(() => {
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
    <div>
      <h1>Quiz time</h1>
      {questions.map(item => {
        return (
          <div>
            <h1>{item.questions}</h1>;
            {answers.map(element => {
              if (element.question_id === item.question_id) {
                console.log("match");
                return (
                  <button onClick={checkAnswer(element.correct)}>
                    {element.answers}
                  </button>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};
