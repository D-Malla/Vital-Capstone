const initialState = {
  lessons_title: [],
  lessons: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "LESSONS_TITLE":
      return { ...state, lessons_title: action.payload };
    case "LESSONS":
      return { ...state, lessons: action.payloads };
    default:
      return state;
  }
}
