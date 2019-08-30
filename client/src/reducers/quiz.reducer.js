const initialState = {
  questions: [],
  answers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "GET_ANSWERS":
      return { ...state, answers: action.payload };
    default:
      return state;
  }
}
