const initialState = {
  questions: [],
  answers: [],
  correct_answer: [],
  total_answers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "GET_ANSWERS":
      return { ...state, answers: action.payload };
    case "CORRECT_ANSWER":
      return {
        ...state,
        correct_answer: [...state.correct_answer, action.payload]
      };
    case "TOTAL_ANSWERS":
      return {
        ...state,
        total_answers: [...state.total_answers, action.payload]
      };
    case "RESET_APP":
      return {
        ...state,
        correct_answer: []
      };
    default:
      return state;
  }
}
