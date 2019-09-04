const initialState = {
  questions: [],
  answers: [],
  correct_answer: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "GET_ANSWERS":
      return { ...state, answers: action.payload };
    case "CORRECT_ANSWERS":
      return {
        ...state,
        correct_answer: [...state.correct_answer, action.payload]
      };
    default:
      return state;
  }
}
