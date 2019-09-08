import store from "../store";
import axios from "axios";

export function getQuestions(parent_id) {
  axios.get("/api/questions/" + parent_id).then(resp => {
    store.dispatch({
      type: "GET_QUESTIONS",
      payload: resp.data
    });
  });
}

export function getAnswers(parent_id) {
  axios.get("/api/answers/" + parent_id).then(resp => {
    store.dispatch({
      type: "GET_ANSWERS",
      payload: resp.data
    });
  });
}
export function getCorrectAnswer(correct) {
  console.log(correct);
  store.dispatch({
    type: "CORRECT_ANSWER",
    payload: correct
  });
}
export function clearAnswers() {
  store.dispatch({
    type: "RESET_APP"
  });
}

export function getTotalAnswers(correct) {
  store.dispatch({
    type: "TOTAL_ANSWERS",
    payload: correct
  });
}
