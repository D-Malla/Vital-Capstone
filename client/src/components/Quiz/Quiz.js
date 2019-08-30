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
      {questions.map(question => (
        <div>
          {console.log(question)}
          {/* <h1>{question.cat_slug + " Quiz"}</h1> */}
          <h3 key={question.parent_id}>{question.questions}</h3>
          {console.log("question_check", question.question_id)}

          {answers.map(answer => (
            <h4 key={answer.id}>
              <button
                type="submit"
                onClick={() => checkAnswer(answer.question_id)}
              >
                {answer.answers}
                {/* {answer.question_id === questions.question_id
                  ? answer.answers
                  : ""} */}
                {console.log("answer_check", answer.question_id)}
              </button>
            </h4>
          ))}
        </div>
      ))}
    </div>
  );
};
