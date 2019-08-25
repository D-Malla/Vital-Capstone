const initialState = {
  css_question: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "CSS_QUESTION":
      return { ...state, CSS_QUESTION: action.payload };
    default:
      return state;
  }
}
